export interface Track {
    id: number;
    title: string;
    artist: string;
    duration: number;
}

export interface Playlist {
    id: number;
    name: string;
    cover: string;
    tracks: Track[];
}
