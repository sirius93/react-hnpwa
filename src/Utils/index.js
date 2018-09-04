export const ajax=(url)=>{
    return fetch(url).then(data => data.json());
}