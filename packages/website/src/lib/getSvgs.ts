async function index() {
  return (await fetch('http://localhost:3000/api/svgs')).json() as unknown as {
    components: { componentName: string }[]
  }
}

export default index
