import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FigureExpansionPanel from './components/FigureExpansionPanel';
import FilterSelect from './components/FilterSelect';
import { DataService, IDance, IDanceType, IFigure } from './data-service';
import Header from './layout/Header';

interface IAppProps {
  service: DataService;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectGroup: {
      margin: '1rem 0'
    },
    select: {
      marginRight: '1rem'
    }
  })
);

const App: React.FC<IAppProps> = props => {
  const [cachedDances, setCachedDances] = useState<Record<string, IDance[]>>(
    {}
  );
  const [cachedFigures, setCachedFigures] = useState<Record<string, IFigure[]>>(
    {}
  );
  const [selectedDanceType, setSelectedDanceType] = useState('');
  const [selectedDance, setSelectedDance] = useState('');
  const [dances, setDances] = useState<IDance[]>([]);
  const [figures, setFigures] = useState<IFigure[]>([]);
  const [danceTypes, setDanceTypes] = useState<IDanceType[]>([]);

  async function fetchDanceTypes(): Promise<void> {
    const danceTypes = await props.service.fetchDanceTypes();
    const selectedDanceType = danceTypes.length > 0 ? danceTypes[0].id : '';
    setSelectedDanceType(selectedDanceType);
    setDanceTypes(danceTypes);

    if (selectedDanceType !== '') fetchDances(selectedDanceType);
  }

  async function fetchFigures(danceId: string): Promise<void> {
    const figures = await (cachedFigures[danceId] ||
      props.service.fetchFigures(danceId));

    setCachedFigures(state => ({ ...state, [danceId]: figures }));
    setFigures(figures);
  }

  async function fetchDances(danceTypeId: string): Promise<void> {
    const dances = await (cachedDances[danceTypeId] ||
      props.service.fetchDances(danceTypeId));
    const selectedDance = dances.length > 0 ? dances[0].id : '';

    setCachedDances(state => ({ ...state, [danceTypeId]: dances }));
    setSelectedDance(selectedDance);
    setDances(dances);

    if (selectedDance !== '') fetchFigures(selectedDance);
  }

  useEffect(() => {
    fetchDanceTypes();
  });

  function handleDanceTypeChange(
    event: React.ChangeEvent<{ value: unknown }>
  ): void {
    const selectedDanceType = event.target.value as string;
    setSelectedDanceType(selectedDanceType);
    fetchDances(selectedDanceType);
  }

  function handleDanceChange(
    event: React.ChangeEvent<{ value: unknown }>
  ): void {
    const selectedDance = event.target.value as string;
    setSelectedDance(selectedDance);
    fetchFigures(selectedDance);
  }

  const classes = useStyles();

  return (
    <>
      <Header />
      <Container>
        <div className={classes.selectGroup}>
          <FilterSelect
            className={classes.select}
            value={selectedDanceType}
            onChange={handleDanceTypeChange}
            options={danceTypes}
          />
          <FilterSelect
            className={classes.select}
            value={selectedDance}
            onChange={handleDanceChange}
            options={dances}
          />
        </div>
        {figures.map(_ => (
          <FigureExpansionPanel key={_.id} data={_} />
        ))}
      </Container>
    </>
  );
};

export default App;
