



const app={


    data(){
        return{
            currentPage:"home",
            links:[
                {id:1,img:'phone.png',name:"Мобильные"},
                {id:2,img:'power-bank.png',name:"Powerbank"},
                {id:3,img:'phone case.png',name:"Phone case"},
                {id:4,img:'gpu-icon.png',name:"Видеокарты"},
                {id:5,img:'cpu.png',name:"Процессоры"},
                {id:6,img:'bike.png',name:"Велосипеды"},
            ],
            popular:[
                {id:1,img:'Airpods.png',name:"Apple AirPods 2 with Charging Case"},
                {id:2,img:'bicycle.png',name:"Велосипед AltairAL 27.5 V FR"},
                {id:3,img:'GPU.png',name:"MSI GeForce GTX 1660 SUPER Gaming"},
            ],

            isVisible:false,
            isVisiblee:false,
            isVisibleee:false
        }
    },
    methods:{
        showElement(a) {

            this.isVisible = true;
        },
        hideElement(a) {
            this.isVisible = false;
        },
        showElements(b) {

            this.isVisiblee = true;
        },
        hideElements(b) {
            this.isVisiblee = false;
        },
        showElementss(c) {

            this.isVisibleee = true;
        },
        hideElementss(c) {
            this.isVisibleee = false;
        },
    }
}




Vue.createApp(app).mount('#app')
