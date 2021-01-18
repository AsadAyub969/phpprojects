import { NavigationActions } from 'react-navigation'

let navigation

export const setNavigator = nav => {
    navigaor = nav
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}