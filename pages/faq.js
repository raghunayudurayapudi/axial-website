// Copyright 2021 akash
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import Head from 'next/head'

import {
    FAQ, Questions
} from '../components/FAQ'

import WavesDivider from '../components/Common/WavesDivider'
import WaveDivider from '../components/Common/WaveDivider'
import SEO from '../components/SEO'
import { useRouter } from 'next/router'

export default function Faq() {

    const router = useRouter();

    return (
        <>
            <SEO
                url={router.pathname}
                openGraphType="website"
                schemaType="Organization"
                title="FAQ"
                description="Frequently asked questions (FAQ) page | eCommerce fulfillment"
            />

            <div>
                {/* Hero section */}
                <FAQ />
                <WaveDivider direction={"down"} />
                {/* How we work section */}
                <Questions />
            </div>
        </>
    )
}

