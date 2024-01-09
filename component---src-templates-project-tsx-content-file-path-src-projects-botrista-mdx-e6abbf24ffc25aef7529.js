"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[104],{6129:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return h}});var n=a(1151),i=a(7294),o=a(6222),s=a(795);function l(e){const t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",span:"span",ol:"ol"},(0,n.a)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.h1,null,"Botrista"),"\n",i.createElement(s.iz),"\n",i.createElement("div",{style:{maxWidth:"1200px",margin:"auto",paddingTop:"16px"}},i.createElement(o._F,{youTubeId:"INRJ8Y_SD4U",autoPlay:"true"})),"\n",i.createElement(t.p,null,"Botrista (robot-barista) is a seven degree of freedom Franka Emika Panda robot arm\nthat makes pour over coffee. It was made as the final project for Mechanical Engineering\n495 - Embedded Systems in robotics."),"\n",i.createElement(t.p,null,"Collaborators:"),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Anuj"),"\n",i.createElement(t.li,null,"Stephen Ferro"),"\n",i.createElement(t.li,null,"Jihai"),"\n",i.createElement(t.li,null,"Kyle Wang"),"\n"),"\n",i.createElement(t.p,null,"Making pour over coffee is mainly a manipulation focused task. To reliably make coffee\na robust grasping process is needed and this leads to three main technical challenges: detecting object\npositions, detecting object handles, and grasping."),"\n",i.createElement(t.h2,null,"Object Positioning"),"\n",i.createElement("div",{style:{maxWidth:"800px",margin:"auto"}},i.createElement(t.p,null,i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1004px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/24cb35941e1e1a879a02911a84519696/73b94/BotristaRviz.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 83.33333333333334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAADWUlEQVR42m1U23ITRxDVZ1BUqEqMrfvualerlXd1t27oHiQLKZItX4XtYCX4hg2yjC05Jg42VB4oEgp4o/iDBCj+7TA9QlsyxcOp3ek509N9unssi4stxOMxZDJp3LqVMpHNppArzCCZjJt79D/OGYH2U6kEyuWfYaGFzTYFUXSbkCQ3XE4H5pdrGPx5hlKljMZcA5FICG63k+0LJlcQXPzrdNoxrWuwFIt5blRVBYrXA69X5nC5nHhwsImT02MEQkHcqc1ibb0Nj0c0OSZUmdvD4SAshUKOHXZAUTyQZYmD/imSzU4bh71DXL9+DUdHh9jb24HVOskdjLgjUJShcGDokA5TdLRBNxFEUUQ0pqNQTGO13cb/H/7jehHX5MniMAB2VmQyBUMGLPl8luf/7Y0yI6uqCKfrJ/SOenj95l/mROL6KYp0JSMCyRYMjjkkLUYkTVMYQYeq+aBNCyz1e7j46xx2600Yhpc7lhXisX9J5Oco5aHDrymTwSWwygksXa8DvnQSWT0OQ5pCo7qCg94FVEOBHkrBKTGJfB5ougrRI/DUuYahwDBCu92K5EwU6YiBCDNGogaMaBEpOYesP4NEKI1wdRHhyDquOd2wsUsCoWn4AxqDHz7dN9SQIiyyCKeYw82FOnaaJdzvrOHFiwHaq0/Q3X2CTn0DS/4qsrU0EuvzEB0/wD5xAzaXlV0Q5JUlTUXha4SlUgH7+9von3Sxv7eNf16+xN+X5+gsL2O+t4CHjw6QDWSQNwLwlmREb08jzLSLJsJIJGfg83m57lQsHmEul0GGtcPb16/w+dNHvH//DrvbD9BotrC+ew+P+n3sdI9QZevNX7ewtLaC5sIcypXbvDDDqlNRqMrUh8UcJicn+FhdXjzF8+fP2ITsY3D6B56eP8NJ/wxn/QGOu12cnl+i1xugVqtzJ5Ikfr9tqMoEv9/HyFXEYmE06jVsbGyg89vvuN++i4dbW3h8PECdORvOu2A2+BWHNMs0tzTLtEkPg4e1gsQQT8TQbP6CpYUWKuUy8rmsGRX17fiomm1DT9LExI9wuOx8psfhcNig6340ancgsAxojikT2qNhGIHW9GJpmgrLyuoSZpIxFNgzVq1WMDtbvoIKE5/s4/iWQzZ6C1utOXwB62dkHpBuXxkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Image"\n        title=""\n        src="/static/24cb35941e1e1a879a02911a84519696/73b94/BotristaRviz.png"\n        srcset="/static/24cb35941e1e1a879a02911a84519696/5a46d/BotristaRviz.png 300w,\n/static/24cb35941e1e1a879a02911a84519696/0a47e/BotristaRviz.png 600w,\n/static/24cb35941e1e1a879a02911a84519696/73b94/BotristaRviz.png 1004w"\n        sizes="(max-width: 1004px) 100vw, 1004px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})," ")),"\n",i.createElement(t.p,null,'To be able to manipulate each object we need to know where it is. In a fixed\nindustrial setting using preprogrammed locations is fine. However being able\nto detect the location of the objects dynamically makes it easier to add new objects,\niteratively optimize the workspace, and is robust to objects being knocked or pushed.\nTo achieve this we used April tags. There is a main "localizer tag" that has a known position relative to the robot which is used\nto find the transform from the camera frame to the robot base.\nThe camera is a Intel Realsense D435i and it is mounted to the ceiling above the robot to be able to see the whole workspace.\nThe frames corresponding to each tag are shown in the Rviz screenshot above.'),"\n",i.createElement(t.h2,null,"Handle Detection"),"\n",i.createElement("div",{style:{maxWidth:"800px",margin:"auto"}},i.createElement(t.p,null,i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 676px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/51c88c02f6d1558e05cbfd8a587bd605/9bb7a/BotristaHandle.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 55.666666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDUlEQVR42h2RW0ybZRyHv8SsGg9Z8IJlZGEiGMegA4fFwgplZWUcSvv1fPhKD4yez4UVZN3qWgp0MOJkoMO5xExdPCRTXNRptgvvNHphvPLKC2+99dI9vvImb96bf57/731+krpfQ31jnWs3Nnn75hb//vMnf//xiHdW3yNbWiRdyFJZqfPu3gdsbW+LmR1K5SvMKh6SkyMkLeeIjOtJehycHRtFCqSzdGv6qDXqfPXgAU8Q58lfrGSr5NN1qo011hrX+Pb+PT679xGNrRuYZRMD6jaWnCaiRi1OzUniPifl6qoAxhLYZ4K0d3Ywv1RmpbxJOV9Dd8KMRRukUlnh+uYqvz6+z8/i3rl9i8EzGl4+cgh5sJs5kTIX8FC+UiE9P4+kHzfi8HuxuO2YHBYmzDKn1FpOt+mZGJxGCfnp0/UzX4jx24/7/PTD5+xubxDwO7kQ9lCpvcXV9QbxTIZTGjXS6NQ44xYTstuB2WUlEAmRLKYxnjcwPKpD3d2O9tVWetSdpBIKvzz+kkfff8fu+3tcqlwmlc+gBBVOv9GLpJKQdOfOYpg0MmmdxuKy4Q0oWMWbLqRZrJTpfeUo2panGdb0oO7v4c3lEtu7O1TrNbKisMJCEb1xSCg7TtORJqRp5/9flQ+AU7ZpzHYz+Ys59r/Z587du1zfWef2h1lMphFcMwqy00I4EiBbzBOJz7G8vED3a52oXjiE6jkVUjAaQ/a4DvwF5kLCmULp0hKffPEpDx9+zeWbt3B//Dt5txebUJLMxAmIGUUUkczEcClOOk60crz5WY61HBYJ7Q6x2ce4PEU4ESGaSYgUMtW1OuliihHTBImNPYJiWTQ5SyafJJWNUatfxR+eYUC46zj6PO3Nz9BxTAC1+iFMVhm7z33gMBS7gC/kI5qKMWjQ4Z8NEIkFKZRyFEt54SxHubJMcXEBw5k+rEMC2NpE84sqWg4/hWR2ufEGgyK6B9llYcw0htvvwea2YffYcHodKGEfYQFN5uIULuZFcV7k88PMmg283vsSXV0taAa6OKlu4z9DWtRn1x8eaAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Image"\n        title=""\n        src="/static/51c88c02f6d1558e05cbfd8a587bd605/9bb7a/BotristaHandle.png"\n        srcset="/static/51c88c02f6d1558e05cbfd8a587bd605/5a46d/BotristaHandle.png 300w,\n/static/51c88c02f6d1558e05cbfd8a587bd605/0a47e/BotristaHandle.png 600w,\n/static/51c88c02f6d1558e05cbfd8a587bd605/9bb7a/BotristaHandle.png 676w"\n        sizes="(max-width: 676px) 100vw, 676px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})," ")),"\n",i.createElement(t.p,null,"The most ideal solution for this problem is somehow detecting the handles directly. The handles for the kettle, pot, filter, and coffee scoop\nare all different shapes and sizes, this makes both detecting directly and mounting april tags harder. To overcome this we choose to create a form fitting\ntag from two pieces of different colored tape. In addition to depth from the end effector mounted D405, this allows for detecting the pose and orientation of the handle.\nThe green tape signifies the 'head' or 'front' of the handle while the blue is the main 'body' and grasp location. The two sections were identified using color thresholding\nand their centers were found using the center of mass of the detected contour."),"\n",i.createElement(t.h2,null,"Grasping"),"\n",i.createElement("div",{style:{maxWidth:"800px",margin:"auto"}},i.createElement(t.p,null,i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 495px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/e0b095410d11e432bcb37604c113a0ca/a4d88/BotristaGrasp.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 105%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4ElEQVR42pWU6Y7CMAyE8/5Pxw+kIhCHuCn3Vc7Wq8/SoGyW7i6WrDSOMx4faTgcDpbnua3Xa1utVm9XpKqql00a+4BxPp8t8PGbbLdbu16v7rzf72v9yrJ08AA60bvdro3HY1sulzabzWw4HNr9frfT6WSXy8WOx6MDsx+NRs4IgMlk4ncQsAJGZLPZuEEX+X4+n74viuK1Ph4PP5vP57bb7Zy5AJ0hGxxhg95uNwfkm5VzQGAJEHb2BEPZs8LcAblEbWgOSrras8JAgg1WrIB3Oh33QbFDJqTFbbVaHvUv4fJgMPhmoxcBBiowUdvttqcZjwQdRGDCmcYm9kNJO6guqRBNIEpbI6azVAgQmDMK3u/3vX4oQRgb6kJUVDNJtzkTQylZ+NgwLtSDecKJS3QdO5djQGycMYeLxcKBCAoJsuTc5xCGdYKTztNXRepKn9VThl36fukeDGAbPze+9QAajYanjo/ueVPesYI+TqQXN4GVBgE6nU5/NNPHJqaepkANqS3DjwIEYOyTai1DNaXZbFqWZd4IWNME7HXyFpB6kK4GWtH1fik+tf83IBcAoLu8W/2+NOD6R37EUGNCx6kjs9br9ZwhaX8EqMmve47U9yNA5kk/gfhnoFmtCwjgF0deW2Bqi03XAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Image"\n        title=""\n        src="/static/e0b095410d11e432bcb37604c113a0ca/a4d88/BotristaGrasp.png"\n        srcset="/static/e0b095410d11e432bcb37604c113a0ca/5a46d/BotristaGrasp.png 300w,\n/static/e0b095410d11e432bcb37604c113a0ca/a4d88/BotristaGrasp.png 495w"\n        sizes="(max-width: 495px) 100vw, 495px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})," ")),"\n",i.createElement(t.p,null,"To reliably grasp the object we used a five step process with five poses defined."),"\n",i.createElement(t.ol,null,"\n",i.createElement(t.li,null,"The robot first goes to an observe pose relative to an objects april tag. Here the\nend effector should be able to see the handle and the handle pose is found."),"\n",i.createElement(t.li,null,"From the observe pose goto and approach pose defined relative to the handle. Having an approach\npose allows you to define the approach direction and orientation."),"\n",i.createElement(t.li,null,"From approach pose goto the grasp pose also defined relative to the handle. The gripper closes\nat this point and the object is grasped."),"\n",i.createElement(t.li,null,"An escape pose defining how you want to 'lift' the object."),"\n",i.createElement(t.li,null,"Finally an optional escape pose. This was useful for maneuvering the robot out of tighter areas of the workspace."),"\n"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.a)(),e.components);return t?i.createElement(t,e,i.createElement(l,e)):l(e)},c=a(4842),d=a(5277);const p=e=>{let{data:t,children:a}=e;return(0,d.tZ)(c.Z,{children:(0,d.tZ)("div",{sx:{maxWidth:"1200px",margin:"auto"},children:(0,d.tZ)(n.Z,{children:a})})})},g=e=>{let{data:t}=e;return(0,d.tZ)("title",{children:t.mdx.frontmatter.title})};function h(e){return i.createElement(p,e,i.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-templates-project-tsx-content-file-path-src-projects-botrista-mdx-e6abbf24ffc25aef7529.js.map