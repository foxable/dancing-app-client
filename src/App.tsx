import React from "react";

import { DataService, IDanceType, IDance, IFigure } from "./DataService";
import { Hero, HeroFooter, Section, Container } from "./components/bulma";

import HeaderNav from "./components/HeaderNav";
import Select from "./components/Select";
import Figure from "./components/Figure";

interface IAppProps
{
    service: DataService;
}

interface IAppState
{
    selectedDanceType?: string;
    selectedDance?: string;    
    danceTypes: IDanceType[];
    dances: IDance[];
    figures: IFigure[];    
}

interface IAppCache
{
    readonly dances: Map<string, IDance[]>;
    readonly figures: Map<string, IFigure[]>;
}

export default class App extends React.Component<IAppProps, IAppState>
{
    private readonly _cache: IAppCache = {
        dances: new Map(),
        figures: new Map()
    };

    public constructor(props: IAppProps)
    {
        super(props);
        this.state = {            
            dances: [],
            figures: [],
            danceTypes: []
        };

        this.handleDanceTypeChange = this.handleDanceTypeChange.bind(this);
        this.handleDanceChange = this.handleDanceChange.bind(this);
    }

    public componentDidMount(): void
    {
        this.fetchDanceTypes();
    }

    private async fetchDanceTypes(): Promise<void>
    {
        const danceTypes = await this.props.service.fetchDanceTypes();
        const selectedDanceType = danceTypes.length > 0 ? danceTypes[0].id : undefined;
        this.setState({ ...this.state, selectedDanceType, danceTypes });

        if (typeof selectedDanceType !== "undefined")
            this.fetchDances(selectedDanceType);  
    }

    private async fetchDances(danceTypeId: string): Promise<void>
    {
        const dances = await (this._cache.dances.get(danceTypeId) || this.props.service.fetchDances(danceTypeId));
        const selectedDance = dances.length > 0 ? dances[0].id : undefined;

        this._cache.dances.set(danceTypeId, dances);
        this.setState({ ...this.state, selectedDance, dances });

        if (typeof selectedDance !== "undefined")
            this.fetchFigures(selectedDance);
    }

    private async fetchFigures(danceId: string): Promise<void>
    {
        const figures = await (this._cache.figures.get(danceId) || this.props.service.fetchFigures(danceId));

        this._cache.figures.set(danceId, figures);        
        this.setState({ ...this.state, figures });
    }

    private handleDanceTypeChange(event: React.ChangeEvent<HTMLSelectElement>): void
    {
        const selectedDanceType = event.target.value;
        this.setState({ ...this.state, selectedDanceType });
        this.fetchDances(selectedDanceType);
    }

    private handleDanceChange(event: React.ChangeEvent<HTMLSelectElement>): void
    {
        const selectedDance = event.target.value;
        this.setState({ ...this.state, selectedDance });
        this.fetchFigures(selectedDance);
    }

    public render(): JSX.Element
    {
        return (
            <>
                <Hero isDark>
                    <HeroFooter className="header-footer">
                        <HeaderNav/>
                    </HeroFooter>
                </Hero>
                <Section>
                    <Container>
                        <Select
                            value={this.state.selectedDanceType}
                            onChange={this.handleDanceTypeChange}
                            options={this.state.danceTypes}/>
                        <Select
                            value={this.state.selectedDance}
                            onChange={this.handleDanceChange}
                            options={this.state.dances}/>
                        {this.state.figures.map(_ => <Figure key={_.id} data={_}/>)}
                    </Container>
                </Section>          
            </>            
        );
    }
}