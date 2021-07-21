export class Project {
    public url: string
    public langs: string[]
    
    constructor(url: string, langs: string[]) {
        this.url = url
        this.langs = langs
    }
}