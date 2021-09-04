import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import('./views/Inicio')
        },
        {
            path: '/inicio',
            redirect: {name: 'inicio'},
        },
        {
            path: '/home',
            redirect: {name: 'inicio'},
        },
        {
            path: '/portada',
            redirect: {name: 'inicio'},
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            alias: ["/acerca"],
            component: () => import('./views/SobreMi')
        },
        {
            path: '/contacto',
            name: 'contacto',
            alias: ["/contactame"],
            component: () => import('./views/Contacto')
        },
        {
            path: '/post',
            name: 'post',
            component: () => import('./views/Post'),
            children: [
                {
                    path: ':articulo',
                    component: () => import('./views/Articulo'),
                }
            ]
        },
        {  
            path: '/administrador',
            name: 'administrador',
            component: () => import('./views/Administrador'),
            children: [
                {
                    path: 'simple',
                    name: 'simple',
                    component: () => import("./views/AdministradorSimple.vue")
                },
                {
                    path: 'avanzado',
                    name: 'avanzado',
                    component: () => import("./views/AdministradorAvanzado.vue")
                },
            ]
        },
        {
            path: '*',
            component: () => import('./views/NotFound'),
        }
    ]
})