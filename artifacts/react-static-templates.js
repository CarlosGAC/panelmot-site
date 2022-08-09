

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('__react_static_root__/src/components/Pages/About/About.jsx'), universalOptions)
      t_1.template = '__react_static_root__/src/components/Pages/About/About.jsx'
      
const t_2 = universal(import('__react_static_root__/src/components/Pages/About/index.js'), universalOptions)
      t_2.template = '__react_static_root__/src/components/Pages/About/index.js'
      
const t_3 = universal(import('__react_static_root__/src/components/Pages/Blog/Blog.jsx'), universalOptions)
      t_3.template = '__react_static_root__/src/components/Pages/Blog/Blog.jsx'
      
const t_4 = universal(import('__react_static_root__/src/components/Pages/Blog/index.js'), universalOptions)
      t_4.template = '__react_static_root__/src/components/Pages/Blog/index.js'
      
const t_5 = universal(import('__react_static_root__/src/components/Pages/Contact/Contact.jsx'), universalOptions)
      t_5.template = '__react_static_root__/src/components/Pages/Contact/Contact.jsx'
      
const t_6 = universal(import('__react_static_root__/src/components/Pages/Contact/index.js'), universalOptions)
      t_6.template = '__react_static_root__/src/components/Pages/Contact/index.js'
      
const t_7 = universal(import('__react_static_root__/src/components/Pages/index.js'), universalOptions)
      t_7.template = '__react_static_root__/src/components/Pages/index.js'
      
const t_8 = universal(import('__react_static_root__/src/components/Pages/Index/index.js'), universalOptions)
      t_8.template = '__react_static_root__/src/components/Pages/Index/index.js'
      
const t_9 = universal(import('__react_static_root__/src/components/Pages/Index/Welcome.jsx'), universalOptions)
      t_9.template = '__react_static_root__/src/components/Pages/Index/Welcome.jsx'
      
const t_10 = universal(import('__react_static_root__/src/components/Pages/NotFound/index.js'), universalOptions)
      t_10.template = '__react_static_root__/src/components/Pages/NotFound/index.js'
      
const t_11 = universal(import('__react_static_root__/src/components/Pages/NotFound/NotFound.jsx'), universalOptions)
      t_11.template = '__react_static_root__/src/components/Pages/NotFound/NotFound.jsx'
      
const t_12 = universal(import('__react_static_root__/src/containers/Post'), universalOptions)
      t_12.template = '__react_static_root__/src/containers/Post'
      

// Template Map
export default {
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': require('__react_static_root__/node_modules/react-static/lib/browser/components/Default404').default,
'__react_static_root__/src/components/Pages/About/About.jsx': require('__react_static_root__/src/components/Pages/About/About.jsx').default,
'__react_static_root__/src/components/Pages/About/index.js': require('__react_static_root__/src/components/Pages/About/index.js').default,
'__react_static_root__/src/components/Pages/AboutUs/AboutUs.jsx': require('__react_static_root__/src/components/Pages/AboutUs/AboutUs.jsx').default,
'__react_static_root__/src/components/Pages/AboutUs/index.js': require('__react_static_root__/src/components/Pages/AboutUs/index.js').default,
'__react_static_root__/src/components/Pages/Blog/Blog.jsx': require('__react_static_root__/src/components/Pages/Blog/Blog.jsx').default,
'__react_static_root__/src/components/Pages/Blog/index.js': require('__react_static_root__/src/components/Pages/Blog/index.js').default,
'__react_static_root__/src/components/Pages/FAQ/FAQ.jsx': require('__react_static_root__/src/components/Pages/FAQ/FAQ.jsx').default,
'__react_static_root__/src/components/Pages/FAQ/index.js': require('__react_static_root__/src/components/Pages/FAQ/index.js').default,
'__react_static_root__/src/components/Pages/index.js': require('__react_static_root__/src/components/Pages/index.js').default,
'__react_static_root__/src/components/Pages/Index/index.js': require('__react_static_root__/src/components/Pages/Index/index.js').default,
'__react_static_root__/src/components/Pages/Index/Welcome.jsx': require('__react_static_root__/src/components/Pages/Index/Welcome.jsx').default,
'__react_static_root__/src/components/Pages/NotFound/index.js': require('__react_static_root__/src/components/Pages/NotFound/index.js').default,
'__react_static_root__/src/components/Pages/NotFound/NotFound.jsx': require('__react_static_root__/src/components/Pages/NotFound/NotFound.jsx').default,
'__react_static_root__/src/containers/Post': require('__react_static_root__/src/containers/Post').default

}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404"

