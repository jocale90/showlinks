// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_ja-jp",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"\u221e",superscriptingExponent:"\u00d7",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000\u5146","currencySpacing-afterCurrency-insertBetween":"\u00a0",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",
currencyFormat:"\u00a4#,##0.00;(\u00a4#,##0.00)",perMille:"\u2030",group:",",percentFormat:"#,##0%","decimalFormat-long":"000\u5146",decimalFormat:"#,##0.###",decimal:".","currencySpacing-beforeCurrency-insertBetween":"\u00a0",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"aK:mm (E)","days-standAlone-short":"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),"months-format-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"field-second-relative+0":"\u4eca\u3059\u3050",
"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"\u66dc\u65e5","dateFormatItem-yQQQ":"y/QQQ","dateFormatItem-yMEd":"y/M/d(E)","field-wed-relative+0":"\u4eca\u9031\u306e\u6c34\u66dc\u65e5","field-wed-relative+1":"\u6765\u9031\u306e\u6c34\u66dc\u65e5","dateFormatItem-GyMMMEd":"Gy\u5e74M\u6708d\u65e5(E)","dateFormatItem-MMMEd":"M\u6708d\u65e5(E)",eraNarrow:["BC","BCE","AD","CE"],"field-tue-relative+-1":"\u5148\u9031\u306e\u706b\u66dc\u65e5","days-format-short":"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),
"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"y\u5e74M\u6708d\u65e5","field-fri-relative+-1":"\u5148\u9031\u306e\u91d1\u66dc\u65e5","field-wed-relative+-1":"\u5148\u9031\u306e\u6c34\u66dc\u65e5","months-format-wide":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"\u5348\u5f8c","dateFormat-full":"y\u5e74M\u6708d\u65e5EEEE","field-thu-relative+-1":"\u5148\u9031\u306e\u6728\u66dc\u65e5",
"dateFormatItem-Md":"M/d","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"\u6b63\u5348","dateFormatItem-yMd":"y/M/d","field-era":"\u6642\u4ee3","dateFormatItem-yM":"y/M","months-standAlone-wide":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"timeFormat-short":"H:mm","quarters-format-wide":["\u7b2c1\u56db\u534a\u671f","\u7b2c2\u56db\u534a\u671f","\u7b2c3\u56db\u534a\u671f",
"\u7b2c4\u56db\u534a\u671f"],"dateFormatItem-yQQQQ":"yQQQQ","timeFormat-long":"H:mm:ss z","field-year":"\u5e74","dateFormatItem-yMMM":"y\u5e74M\u6708","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"\u6642","months-format-abbr":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"field-sat-relative+0":"\u4eca\u9031\u306e\u571f\u66dc\u65e5","field-sat-relative+1":"\u6765\u9031\u306e\u571f\u66dc\u65e5","timeFormat-full":"H\u6642mm\u5206ss\u79d2 zzzz",
"dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"\u4eca\u65e5","field-thu-relative+0":"\u4eca\u9031\u306e\u6728\u66dc\u65e5","field-day-relative+1":"\u660e\u65e5","field-thu-relative+1":"\u6765\u9031\u306e\u6728\u66dc\u65e5","dateFormatItem-GyMMMd":"Gy\u5e74M\u6708d\u65e5","dateFormatItem-H":"H\u6642","months-standAlone-abbr":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"quarters-format-abbr":["Q1","Q2","Q3",
"Q4"],"quarters-standAlone-wide":["\u7b2c1\u56db\u534a\u671f","\u7b2c2\u56db\u534a\u671f","\u7b2c3\u56db\u534a\u671f","\u7b2c4\u56db\u534a\u671f"],"dateFormatItem-Gy":"Gy\u5e74","dateFormatItem-M":"M\u6708","days-standAlone-wide":"\u65e5\u66dc\u65e5 \u6708\u66dc\u65e5 \u706b\u66dc\u65e5 \u6c34\u66dc\u65e5 \u6728\u66dc\u65e5 \u91d1\u66dc\u65e5 \u571f\u66dc\u65e5".split(" "),"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"H:mm:ss","field-sun-relative+0":"\u4eca\u9031\u306e\u65e5\u66dc\u65e5",
"dateFormatItem-Hm":"H:mm","field-sun-relative+1":"\u6765\u9031\u306e\u65e5\u66dc\u65e5","quarters-standAlone-abbr":["Q1","Q2","Q3","Q4"],eraAbbr:["\u7d00\u5143\u524d","\u897f\u66a6"],"field-minute":"\u5206","field-dayperiod":"\u5348\u524d/\u5348\u5f8c","days-standAlone-abbr":"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),"dateFormatItem-d":"d\u65e5","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"\u6628\u65e5","dateTimeFormat-long":"{1} {0}",
"dayPeriods-format-narrow-am":"\u5348\u524d","dateFormatItem-h":"aK\u6642","dateFormatItem-MMMd":"M\u6708d\u65e5","dateFormatItem-MEd":"M/d(E)","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"\u4eca\u9031\u306e\u91d1\u66dc\u65e5","field-fri-relative+1":"\u6765\u9031\u306e\u91d1\u66dc\u65e5","field-day":"\u65e5","days-format-wide":"\u65e5\u66dc\u65e5 \u6708\u66dc\u65e5 \u706b\u66dc\u65e5 \u6c34\u66dc\u65e5 \u6728\u66dc\u65e5 \u91d1\u66dc\u65e5 \u571f\u66dc\u65e5".split(" "),"field-zone":"\u30bf\u30a4\u30e0\u30be\u30fc\u30f3",
"months-standAlone-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"dateFormatItem-y":"y\u5e74","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"\u6628\u5e74","field-month-relative+-1":"\u5148\u6708","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"aK:mm","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),eraNames:["\u7d00\u5143\u524d","\u897f\u66a6"],
"dateFormatItem-yMMMd":"y\u5e74M\u6708d\u65e5","days-format-narrow":"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),"field-month":"\u6708","days-standAlone-narrow":"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),"dateFormatItem-MMM":"M\u6708","field-tue-relative+0":"\u4eca\u9031\u306e\u706b\u66dc\u65e5","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"\u6765\u9031\u306e\u706b\u66dc\u65e5","dayPeriods-format-wide-am":"\u5348\u524d","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})",
"dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"H:mm (E)","field-mon-relative+0":"\u4eca\u9031\u306e\u6708\u66dc\u65e5","field-mon-relative+1":"\u6765\u9031\u306e\u6708\u66dc\u65e5","dateFormat-short":"y\u5e74M\u6708d\u65e5","dateFormatItem-EHms":"H:mm:ss (E)","dateFormatItem-Ehms":"aK:mm:ss (E)","dayPeriods-format-narrow-noon":"\u6b63\u5348","field-second":"\u79d2","field-sat-relative+-1":"\u5148\u9031\u306e\u571f\u66dc\u65e5","dateFormatItem-yMMMEd":"y\u5e74M\u6708d\u65e5(E)",
"field-sun-relative+-1":"\u5148\u9031\u306e\u65e5\u66dc\u65e5","field-month-relative+0":"\u4eca\u6708","field-month-relative+1":"\u7fcc\u6708","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"d\u65e5(E)","field-week":"\u9031","dateFormat-medium":"y\u5e74M\u6708d\u65e5","field-week-relative+-1":"\u5148\u9031","field-year-relative+0":"\u4eca\u5e74","field-year-relative+1":"\u7fcc\u5e74","dayPeriods-format-narrow-pm":"\u5348\u5f8c","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"H:mm:ss",
"dateFormatItem-hms":"aK:mm:ss","dateFormatItem-GyMMM":"Gy\u5e74M\u6708","field-mon-relative+-1":"\u5148\u9031\u306e\u6708\u66dc\u65e5","field-week-relative+0":"\u4eca\u9031","field-week-relative+1":"\u7fcc\u9031","dateFormatItem-yMM":"y/MM","dateFormatItem-MEEEEd":"M/dEEEE","dateFormatItem-yMEEEEd":"y/M/dEEEE","field-day-relative+2":"\u660e\u5f8c\u65e5","dateFormatItem-yMMMEEEEd":"y\u5e74M\u6708d\u65e5EEEE","field-day-relative+-2":"\u4e00\u6628\u65e5","dateFormatItem-EEEEd":"d\u65e5EEEE","dateFormatItem-GyMMMEEEEd":"Gy\u5e74M\u6708d\u65e5EEEE",
"dateFormatItem-MMMEEEEd":"M\u6708d\u65e5EEEE",_localized:{}}});