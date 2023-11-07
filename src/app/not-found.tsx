interface NotFoundPageProps{
    message:string,
} 

export default function NotFoundPage({message}:NotFoundPageProps) {
  return (
    <div>{message}</div>
  )
}
