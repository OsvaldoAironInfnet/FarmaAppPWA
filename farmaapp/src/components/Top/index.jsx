import {BoxComponent, TopMenuComponent, TypographyComponent} from "../"

const Top = ({ title, subtitle, hasMenu, hasArrowBack, hasImage }) => {
    return (
        <BoxComponent
           
        >
            <TopMenuComponent hasMenu={hasMenu} hasArrowBack={hasArrowBack} hasImage={hasImage} />
            <TypographyComponent style = {{color: "#fff"}} variant="h1" component="h1" sx={{
                fontSize: "3rem",
            }}>
                {title}
            </TypographyComponent>
            <TypographyComponent style = {{color: "#fff"}} variant="h6" component="h6">
                {subtitle}
            </TypographyComponent>
            <div style={{
                    background: "red",
                    width: "160px",
                    height: "200px",
                    position: "fixed",
                    left: "-65px",
                    bottom: '-85px',
                    borderRadius: "100%",
                    zIndex: "-1",
                }}/>

            <div
                 style = {
                    {backgroundColor: '#383737', zIndex: "-1", right: "-20px", bottom: '-50px', position: "fixed",  width: "95%",
                    zIndex: "-1",
                    borderRadius: "100%",
                 height: "200px",}}
            >
            </div>
        </BoxComponent>
    )
}

Top.defaultProps = {
    hasMenu: false, 
    hasArrowBack: false, 
    hasImage: false
}

export default Top;