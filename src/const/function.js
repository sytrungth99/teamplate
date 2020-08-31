const IS_DEBUG = true;
export function DEBUG(tag ='',data){
    if(IS_DEBUG){
        console.log(tag, data)
    }
}