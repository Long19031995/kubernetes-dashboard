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
        name: 'Nodes',
        routerName: 'nodes'
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
  }
]