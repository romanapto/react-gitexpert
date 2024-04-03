export const GitItem = ({title,url}:{title:string, url:string}) => {
    console.log(title,url)
  return (
    <div className="card">
        <img src={url} alt={ title } />
        <p> { title } </p>
    </div>
  )
}
