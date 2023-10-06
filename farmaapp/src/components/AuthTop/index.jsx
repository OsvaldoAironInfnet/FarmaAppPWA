
import {AvatarComponent, TypographyComponent, BoxComponent, StackComponent, TopComponent} from "../";
import logo from '../../assets/logo.png'


const AuthTopComponent = ({title_page, subtitle_page}) => {
    return <BoxComponent
    sx={{pl: 4, pr: 4 }}
            >
                <BoxComponent>
                    <TopComponent title={'FarmaApp'} subtitle={'Encontre medicamentos com poucos cliques.'}/>
                </BoxComponent>
                <StackComponent alignItems={"center"}>
                    <AvatarComponent 
                        sx={{ width: 'auto', height: 'auto', mt: 4 }} 
                        src={logo} 
                        alt={'Logo'}/>
                </StackComponent>
                <StackComponent sx={{mt: 1, mb: 4}}>
                    <TypographyComponent variant={'p'} sx={{
                        textAlign: 'center',
                        fontSize: '1.6rem !important'
                    }}>
                        {title_page}
                    </TypographyComponent>
                    <TypographyComponent variant={'p'} sx={{
                        textAlign: 'center',
                        fontSize: '1.1rem !important'
                    }}>
                        {subtitle_page}
                    </TypographyComponent>
                </StackComponent>
            </BoxComponent>
}

export default AuthTopComponent;