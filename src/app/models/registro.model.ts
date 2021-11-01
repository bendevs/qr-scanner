

export class Registro {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor(format: string, text: string) {

        this.format = format;
        this.text = text;

        this.created = new Date();
        this.determinarTipo();

    }

    private determinarTipo(){

        const inicioTexto = this.text.substr( 0, 4 );
        //console.log('TIPO', inicioTexto);

        switch ( inicioTexto ) {

            case 'http':
                this.type = 'http';
                this.icon = 'globe';                
            break;

            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';                
            break;

            default:
                this.type = 'No reconocido';
                this.icon = 'create';

        }

    }

}
/*

{
    "format": "QR_CODE",
    "text": "BEGIN:VCARD\nVERSION:2.1\nN;CHARSET=UTF-8;ENCODING=8BIT:Rigollet;Claudio;;01\nFN;CHARSET=UTF-8;ENCODING=8BIT:Claudio Rigollet\nORG;CHARSET=UTF-8;ENCODING=8BIT:Vespertino\nTITLE;CHARSET=UTF-8;ENCODING=8BIT:V002\nTEL;TYPE=CELL:+56954236547\nEMAIL:claudioandre@gmail.com\nEND:VCARD",
    "created": "2021-11-01T03:57:22.944Z",
    "type": "No reconocido",
    "icon": "create"
}
*/