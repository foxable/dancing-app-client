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
  const [dancesByType, setDancesByType] = useState<Record<string, IDance[]>>(
    {}
  );
  const [figuresByDance, setFiguresByDance] = useState<
    Record<string, IFigure[]>
  >({});
  const [selectedDanceType, setSelectedDanceType] = useState('');
  const [selectedDance, setSelectedDance] = useState('');
  const [dances, setDances] = useState<IDance[]>([]);
  const [figures, setFigures] = useState<IFigure[]>([]);
  const [danceTypes, setDanceTypes] = useState<IDanceType[]>([]);

  useEffect(() => {
    const fetchDanceTypes = async () => {
      const danceTypes = await props.service.fetchDanceTypes();
      const selectedDanceType = danceTypes.length > 0 ? danceTypes[0].id : '';
      setSelectedDanceType(selectedDanceType);
      setDanceTypes(danceTypes);
    };

    fetchDanceTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchDances = async (danceTypeId: string) => {
      const dances = await (dancesByType[danceTypeId] ||
        props.service.fetchDances(danceTypeId));
      const selectedDance = dances.length > 0 ? dances[0].id : '';

      setDancesByType(state => ({ ...state, [danceTypeId]: dances }));
      setSelectedDance(selectedDance);
      setDances(dances);
    };

    fetchDances(selectedDanceType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDanceType]);

  useEffect(() => {
    const fetchFigures = async (danceId: string) => {
      const figures = await (figuresByDance[danceId] ||
        props.service.fetchFigures(danceId));

      setFiguresByDance(state => ({ ...state, [danceId]: figures }));
      setFigures(figures);
    };

    fetchFigures(selectedDance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDance]);

  function handleDanceTypeChange(
    event: React.ChangeEvent<{ value: unknown }>
  ): void {
    const selectedDanceType = event.target.value as string;
    setSelectedDanceType(selectedDanceType);
  }

  function handleDanceChange(
    event: React.ChangeEvent<{ value: unknown }>
  ): void {
    const selectedDance = event.target.value as string;
    setSelectedDance(selectedDance);
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
