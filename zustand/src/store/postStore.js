import {create} from 'zustand'

export const usePostStore = create((set)=>({
    posts:[],
    loading:false,
    error:null,
    fetchPosts:()=>async ()=>{
        set({ loading:true , error:null })
        try {
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const data=await posts.json()
            set({ loading:false , posts:data })
        }catch (){
            set({error:'Failed to fetch posts' , loading:false})
        }
    },

}))
