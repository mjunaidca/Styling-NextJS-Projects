"use client";

import { Box } from "@chakra-ui/react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import { MyMobileView } from "./text";



export default function Menu() {
    return (
        <Box>
            <DesktopView />
            {/* <MobileView /> */}
            <MyMobileView />
        </Box>
    );
}




