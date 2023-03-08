// Copyright 2022 akash
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

import React from "react";

export default function TopInfoBannner() {
  return (
    <div className="border-b border-primary-light bg-primary-dark py-1 text-center text-white">
      <p>
        {
          "⚠️ Site is under construction. The content you are curently viewing is not accurate and is subjected to change. ⚠️"
        }
      </p>
    </div>
  );
}
