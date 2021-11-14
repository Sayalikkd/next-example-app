import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Webdev</span> Newz
            </h1>
            <p className={headerStyles.description}> Keep upto date with news</p>
        </div>
    )
}

export default Header
