export interface IOptions
{
    path: string;
}

export interface IDanceType
{
    id: string;
    name: string;
}

export interface IDance
{
    id: string;
    name: string;
}

export interface IFigure
{
    id: string;
    name: string;
    description: string;
    level: number;
    video_url: string;
}

export class DataService
{
    private readonly path: string;

    public constructor(path: string)
    {
        this.path = path;
    }

    public async fetchDanceTypes(): Promise<IDanceType[]>
    {
        const response = await fetch(`${this.path}/dance-types`);
        return await response.json();
    }

    public async fetchDances(danceTypeId: string): Promise<IDance[]>
    {
        const response = await fetch(`${this.path}/dance-types/${danceTypeId}/dances`);
        return await response.json();
    }

    public async fetchFigures(danceId: string): Promise<IFigure[]>
    {
        const response = await fetch(`${this.path}/dances/${danceId}/figures`);
        return await response.json();
    }
}