

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

            case 'user':
                this.type = 'user';
                this.icon = 'book';                
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

user [ { "id": 1, "nombre": "Claudio Rigollet", "email": "claudiorigo@gmail.com", "telefono": "+569 5422 5035", "password": "123456", "horario": "Vespertino", "sede": "Viña del Mar", "seccion": "V002" } ]

{
    "format": "QR_CODE",
    "text": "BEGIN:VCARD\nVERSION:2.1\nN;CHARSET=UTF-8;ENCODING=8BIT:Rigollet;Claudio;;01\nFN;CHARSET=UTF-8;ENCODING=8BIT:Claudio Rigollet\nORG;CHARSET=UTF-8;ENCODING=8BIT:Vespertino\nTITLE;CHARSET=UTF-8;ENCODING=8BIT:V002\nTEL;TYPE=CELL:+56954236547\nEMAIL:claudioandre@gmail.com\nEND:VCARD",
    "created": "2021-11-01T03:57:22.944Z",
    "type": "No reconocido",
    "icon": "create"
}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.0432722823!2d-71.625498285299!3d-33.055327584727046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e120faf60c41%3A0x4837a059f416be9a!2sRicardo%20de%20Ferrari%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1635740279792!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>



-33.055328, -71.625498
W9VF+VR6 Valparaíso


{
    "users": [
        {
        "id": 1,
        "nombre": "Claudio Rigollet",
        "email": "claudiorigo@gmail.com",
        "telefono": "+569 5422 5035",
        "password": "123456",
        "horario": "Vespertino",
        "sede": "Viña del Mar",
        "seccion": "V002"
        }
    ]
}

"{\r\n    \"users\": [\r\n        {\r\n        \"id\": 1,\r\n        \"nombre\": \"Claudio Rigollet\",\r\n        \"email\": \"claudiorigo@gmail.com\",\r\n        \"telefono\": \"+569 5422 5035\",\r\n        \"password\": \"123456\",\r\n        \"horario\": \"Vespertino\",\r\n        \"sede\": \"Viña del Mar\",\r\n        \"seccion\": \"V002\"\r\n        }\r\n    ]\r\n}"

-----------------------------------------------------------------------------------------------

"users": [
    {
    "id": 1,
    "nombre": "Claudio Rigollet",
    "email": "claudiorigo@gmail.com",
    "telefono": "+569 5422 5035",
    "password": "123456",
    "horario": "Vespertino",
    "sede": "Viña del Mar",
    "seccion": "V002"
    }
]

{
    "format": "QR_CODE",
    "text": "\"users\": [\r\n    {\r\n    \"id\": 1,\r\n    \"nombre\": \"Claudio Rigollet\",\r\n    \"email\": \"claudiorigo@gmail.com\",\r\n    \"telefono\": \"+569 5422 5035\",\r\n    \"password\": \"123456\",\r\n    \"horario\": \"Vespertino\",\r\n    \"sede\": \"Viña del Mar\",\r\n    \"seccion\": \"V002\"\r\n    }\r\n]",
    "created": "2021-11-01T04:51:23.783Z",
    "type": "No reconocido",
    "icon": "create"
}
-----------------------------------------------------------------------------------------------

"id": 1,
"nombre": "Claudio Rigollet",
"email": "claudiorigo@gmail.com",
"telefono": "+569 5422 5035",
"password": "123456",
"horario": "Vespertino",
"sede": "Viña del Mar",
"seccion": "V002"
}

{
    "format": "QR_CODE",
    "text": "\"id\": 1,\r\n\"nombre\": \"Claudio Rigollet\",\r\n\"email\": \"claudiorigo@gmail.com\",\r\n\"telefono\": \"+569 5422 5035\",\r\n\"password\": \"123456\",\r\n\"horario\": \"Vespertino\",\r\n\"sede\": \"Viña del Mar\",\r\n\"seccion\": \"V002\"\r\n}",
    "created": "2021-11-01T04:53:25.162Z",
    "type": "No reconocido",
    "icon": "create"
}



*/