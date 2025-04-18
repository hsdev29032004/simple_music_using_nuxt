export type TMusic = {
    _id: string,
    name: string,
    slug: string;
    avatar: string,
    singerId: {
        _id: string,
        fullName: string,
        slug: string
    },
    otherSingersId: [string],
    premium: boolean,
}

export type TDetailMusic = TMusic & {
    urlMp3: string,
    lyrics: string
}

export type TListMusic = TMusic[]