import Vue from 'vue'
import Router from 'vue-router'
import Vencimento from '@/components/Vencimento'
import Setor from '@/components/cadastros/Setor'
import Funcionario from '@/components/cadastros/Funcionario'
import Login from '@/pages/Login'
import Logout from '@/pages/Logout'
import Secure from '@/pages/Secure'
import Storage from '../services/Storage'

Vue.use(Router);

const APP_TITLE= 'Mercado Alencar'

let routes =  [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title:"Login"
    }
  }, {
    path: '/logout',
    name: 'logout',
    component: Logout, meta: {
      title:"Logout"
    }
  }, {
    path: '/',
    component: Secure,
    meta: {
      title: 'Autenticado',
      secure:true
    }, children: [
      {
        path: '/',
        name: 'secure.vencimento',
        component: Vencimento,
        meta: {
          title: 'Vencimentos',
          secure:true
        }
      },
      {
        path: '/cadastro/setor',
        name: 'secure.cadastro.setor',
        component: Setor,
        meta: {
          title: 'Setor',
          secure:true
        },
          component: () => import(/* webpackChunkName: "cadastro" */ '../components/cadastros/Setor.vue')
      },
      {
        path: '/cadastro/funcionario',
        name: 'secure.cadastro.funcionario',
        component: Funcionario,
        meta: {
          title: 'Funcionário',
          secure:true
        },
        component: () => import(/* webpackChunkName: "cadastro" */ '../components/cadastros/Funcionario.vue')
      }
    ]
  }, 
  
]

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  window.document.title = APP_TITLE + (to.meta && to.meta.title ? ' > ' + to.meta.title : '');

  const isSecure = to.matched.some((route) => route.meta.secure);
  if (!isSecure) return next();
  if (Storage.has('vencimentoToken'))
  {
    next();
          //  next({ name: 'vencimento'})
  
  } else {
    next({
      path: '/login',
      params: { nextUrl: to.fullPath }
  })
}

})
export default router;