const Layout = (props) => {
  return (
    <div className="md:max-w-2xl md:mx-auto mt-16 mx-4">
      {props.children}
    </div>
  )
}

export default Layout