export class Project {
    public url: string
    public web: string
    public langs: string[]
    
    constructor(url: string, langs: string[], web: string) {
        this.url = url
        this.langs = langs
        this.web = web
    }
}