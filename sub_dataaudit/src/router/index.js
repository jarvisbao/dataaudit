import Layout from '@/views/layout/Layout'

export const asyncRoutes = []
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/retrieve_password',
    component: () => import('@/views/login/retrievePassword'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    name: 'index',
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  {
    path: '/dataDp',
    name: 'dataDp',
    component: Layout,
    redirect: 'dataDp/errtable',
    meta: { title: '审核结果', icon: '', isBack: false },
    children: [
      {
        path: 'errtable',
        name: 'errtable',
        meta: { title: '数据审核', icon: '', isBack: false },
        component: () => import('@/views/demoTable/Tabel'),
        // props: trues
        props: { task_id: '20210122154043000005009442942227' }
      },
      {
        path: '/dataaudit_detail',
        component: () => import('@/views/demoTable/DetailList'),
        name: 'detail',
        meta: { title: '详情', isBack: true },
        props: true
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
