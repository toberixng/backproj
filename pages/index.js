function Home(){
    return <div>Welcome explorer</div>
}

export default Home

// export async function getStaticProps(){
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
//     const posts = await res.json()

//     return{
//         props: {
//             posts
//         }
//     }
// }