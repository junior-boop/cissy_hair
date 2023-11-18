import EditorJs from '@editorjs/editorjs'
import Header  from '@editorjs/header'
import LinkTool from '@editorjs/link'
import List  from '@editorjs/list'
import Checklist from '@editorjs/checklist'
import Embed from '@editorjs/embed'
import Quote from '@editorjs/quote'
import Table from '@editorjs/table'

import { onMount } from 'solid-js'
import { SingleImage } from './SingleImage'


import './Editor.css'

export default function EditorJsComponent(){  
    
    
    
    const handleSave = (editor) => {
        editor.save().then((outputData) => {
            const data = JSON.stringify(outputData)

            SaveFunction(data)

            console.log('Article data: ', outputData )
          }).catch((error) => {
            console.log('Saving failed: ', error)
          });
    }

    onMount(() => {
        const editorjs = new EditorJs({
            holder : "Editorjs", 
            placeholder: 'Entrez votre article ici',

            tools : {
                header : {
                    class : Header,
                    inlineToolbar : true,
                    config: {
                        placeholder: 'Enter a header',
                        levels: [1, 2, 3],
                        defaultLevel : 1
                      }

                },
                list : {
                    class: List,
                    inlineToolbar: true,
                    config: {
                      defaultStyle: 'unordered'
                    }
                }, 
                link : {
                    class : LinkTool,
                    config : {
                        endpoint : 'http://localhost:3001/',
                    }
                }, 
                myImage : {
                    class : SingleImage,
                    inlineToolbar: true,
                    config: {
                        placeholder: 'Paste image URL'
                    }
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                embed: {
                    class: Embed,
                    config: {
                      services: {
                        youtube: true,
                        coub: true
                      }
                    }
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+O',
                    config: {
                      quotePlaceholder: 'Enter a quote',
                      captionPlaceholder: 'Quote\'s author',
                    },
                },
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                      rows: 2,
                      cols: 3,
                    },
                },
                
            },

            data : {},
        })

        const save = document.getElementById('save')
        save.addEventListener('click',() => handleSave(editorjs))
    })
    return(
        <>
            <div id="Editorjs"></div>
            <button id='save'>
                Enregistrer
            </button>
        </>
    )
}


const SaveFunction = async (srcData) => {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin' : 'cors'
       };
    

     
     let response = await fetch("http://127.0.0.1:8787/user", { 
       method: "POST",
       body: srcData,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
    }