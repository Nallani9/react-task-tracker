import PropTypes from 'prop-types'
import Button from './Button'

const onClick = () => {
    console.log('Click')
}

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}

// Css in jss
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }


export default Header