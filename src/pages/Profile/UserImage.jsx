import React from 'react';
import { Image } from '@chakra-ui/react';
const UserImage = ({ pic, name }) => (
    <Image
        src={
            pic ||
            'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/profile.JPG?alt=media&token=0c8aa902-c915-4793-8193-5985a9847aa2' }
        alt={ name }
        boxSize="200px"
        borderRadius="full"
        fallbackSrc="hhttps://res.cloudinary.com/dsabyte/image/upload/v1630411853/users/user-svgrepo-com_vdq4rw.svg"
        mx="auto"
    />
);

export default UserImage;