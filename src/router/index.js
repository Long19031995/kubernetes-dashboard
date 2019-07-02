import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'cluster' },
      component: () => import('@/view/Index'),
      children: [
        {
          path: 'cluster',
          name: 'cluster',
          redirect: { name: 'namespaces' },
          component: () => import('@/view/Cluster/Index'),
          children: [
            {
              path: 'namespaces',
              name: 'namespaces',
              component: () => import('@/view/Cluster/Namespaces')
            },
            {
              path: 'nodes',
              name: 'nodes',
              component: () => import('@/view/Cluster/Nodes')
            },
            {
              path: 'persistent-volumes',
              name: 'persistent-volumes',
              component: () => import('@/view/Cluster/PersistentVolumes')
            },
            {
              path: 'storage-classes',
              name: 'storage-classes',
              component: () => import('@/view/Cluster/StorageClasses')
            }
          ]
        }
      ]
    }
  ]
})