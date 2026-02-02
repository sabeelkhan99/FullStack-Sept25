export default function withAuth(Component) {

    const isAuthenticated = true;

    if (!isAuthenticated) {
        return function () {
            return <p>Please login to continue</p>
        }
    }
    
    return function (props) {
        return <Component {...props} />
    } 
}