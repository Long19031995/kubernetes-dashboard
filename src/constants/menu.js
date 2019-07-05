export default [
  {
    name: 'Cluster',
    routerName: 'cluster',
    listChild: [
      {
        name: 'Namespaces',
        routerName: 'namespaces'
      },
      {
        name: 'Roles',
        routerName: 'roles'
      },
      {
        name: 'Persistent Volumes',
        routerName: 'persistent-volumes'
      },
      {
        name: 'Storage Classes',
        routerName: 'storage-classes'
      }
    ]
  },
  {
    name: 'Workloads',
    routerName: 'workloads',
    listChild: [
      {
        name: 'pods',
        routerName: 'pods'
      }
    ]
  }
]