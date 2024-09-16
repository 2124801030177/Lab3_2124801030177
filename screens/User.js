import React, { useEffect, useState } from "react";
import{StyleSheet, Text, View, ActivityIndicator, } from 'react-native';
import { fetchUserContacts } from "../utility/api";
import ContactThumbnail from "../components/ContactThumbnail";
import colors from "../utility/colors";

const User = ()=>
{
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchUserContacts()
        .then(
            users=>{
                setContacts(users);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e=>{
                setLoading(false);
                setError(true);
            }
        )
    });
    const { avatar, name, phone } = user;
    return (
        <View style={styles.container}>
                {loading && <ActivityIndicator color = "blue" size = "large"/>}
                {error && <Text>Error...</Text>}
                {!loading && !error (
                    <ContactThumbnail avatar={avatar} name={name} phone={phone} />
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default User;