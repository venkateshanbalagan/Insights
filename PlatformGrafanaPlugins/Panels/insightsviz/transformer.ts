/********************************************************************************
 * Copyright 2017 Cognizant Technology Solutions
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/


///<reference path="../../../headers/common.d.ts" />

import _ from 'lodash';
import $ from 'jquery';
import moment from 'moment';
import angular from 'angular';
import kbn from 'app/core/utils/kbn';

export class InsightsVizTransformer {
    neo4jDataParser(response){
        let parsedResponse = {};
        if (response && response.results){
            let dataArray = [];
            parsedResponse['data'] = dataArray;
            for (let result of response.results) {
                var columns = result.columns;
                parsedResponse['columns'] = columns;
                for (let dataRow of result.data){
                    let data = {};
                    dataArray.push(data);
                    for (let columnIndex in columns){
                        data[columns[columnIndex]] = dataRow.row[columnIndex];
                    }
                }
            }
        }
        return parsedResponse;
    }
}
