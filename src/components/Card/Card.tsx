import { useTheme } from "@react-navigation/native";
import React, { FC, ReactNode } from "react"
import { StyleSheet, View } from "react-native";

interface CardProps {
    children?: ReactNode
}

const Card: FC<CardProps> = ({ children }) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.card, {
            backgroundColor: colors.card,
        }]}>
            <>
                {children}
            </>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 20,
        borderRadius: 20,
        marginHorizontal: 8,
        marginTop: 15
    }
})

export default Card
