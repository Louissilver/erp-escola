import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const MenuData = [
    {
        title: 'Página inicial',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'menu-lista__item'
    },
    {
        title: 'Curso',
        path: '/curso',
        icon: <IoIcons.IoIosBook />,
        cName: 'menu-lista__item'
    }
]