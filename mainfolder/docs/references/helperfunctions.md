<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Helper Functions/Methods available in package.</h1>
* Helper function are written inside the package to serve as an example to end user on how to use the package.
* Examples for both synchronous & asynchronous versions are shown.

### __XTS_Helper__

## __cm_master_string_to_df__
<p>Converts the response of cm_master API to a pandas DataFrame. This function takes a string response from the cm_master API, which contains data separated by the '|' character, and converts it into a pandas DataFrame.  The DataFrame will have predefined column headers.</p>
___

Parameters: __cm_master_result__ of string type : The string response from the cm_master API.

Returns: __pd.DataFrame__: A pandas DataFrame containing the parsed data from the cm_master_result string.
___
## __DataFrame for Cash Market__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">|DataFrame for Cash Market|</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""</span><br>
<br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect_async</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">cm_master_string_to_df</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">asyncio</span><br>
<br>
<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSECM]</span> <span style="color:#6a9955"># Works for BSECM as well.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">((</span><span style="color:#dcdcaa">cm_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])))</span><br>
<span style="color:#c586c0">if</span> <span style="color:#d4d4d4">__name__ ==</span> <span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">())</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __Another__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">|DataFrame for Cash Market|</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">cm_master_string_to_df</span><br>
<br>
<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSECM]</span> <span style="color:#6a9955"># Works for BSECM as well</span><br>
<span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">cm_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">]))</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>


## __fo_master_string_to_df__
Converts the response of master API to pandas DataFrame for fo segment. This function takes a string response from the fo_master API, splits it into lines, and then categorizes each line into futures or options based on the number of columns. It then converts these categorized lines into pandas DataFrames with appropriate column headers.
___       

Parameters: __fo_master_result__ of string type : The string response from the fo_master API.

Returns: __tuple__: A tuple containing three pandas DataFrames:

__fut_master_df__: DataFrame containing futures data.

__opt_master_df__: DataFrame containing options data.

__fut_spread_df__: DataFrame Containing future spread data.

___

## __Tuple of DataFrame for FO Market__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">|Tuple of DataFrame for FO Market|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect_async</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">fo_master_string_to_df</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">asyncio</span><br>
<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_BSEFO]</span> <span style="color:#6a9955"># Works for BSECM as well.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">future_master_df = fo_master_string_to_df(market_data_get_master['result'])</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">print(future_master_df[0]) # This will give DataFrame for Future.</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">options_master_df = fo_master_string_to_df(market_data_get_master['result'])</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">print(options_master_df[1]) # This will give DataFrame for Options.</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">future_master_df = fo_master_string_to_df(market_data_get_master['result'])</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">print(future_master_df[2]) # This will give DataFrame for Spread.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">((</span><span style="color:#dcdcaa">fo_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])))</span><br>
<span style="color:#c586c0">if</span> <span style="color:#d4d4d4">__name__ ==</span> <span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">())</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __Another__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">|Tuple of DataFrame for FO Market|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">fo_master_string_to_df</span><br>
<br>
<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSEFO]</span> <span style="color:#6a9955"># Works for BSECM as well.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#ce9178">"""</span><br>
<span style="color:#ce9178">future_master_df = fo_master_string_to_df(market_data_get_master['result'])</span><br>
<span style="color:#ce9178">print(future_master_df[0]) # This will give DataFrame for Future.</span><br>
<br>
<span style="color:#ce9178">options_master_df = fo_master_string_to_df(market_data_get_master['result'])</span><br>
<span style="color:#ce9178">print(options_master_df[1]) # This will give DataFrame for Options.</span><br>
<br>
<span style="color:#ce9178">fut_spread_df = fo_master_string_to_df(market_data_get_master['result'])</span><br>
<span style="color:#ce9178">print(fut_spread_df[2]) # This will give DataFrame for Options.</span><br>
<span style="color:#ce9178">"""</span><br>
<br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">fo_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">]))</span> <br>
<br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __cm_master_df_to_xts_cm_instrument_list__
Converts the pandas DataFrame of cm_master API to list of xts_cm_Instrument objects.
___

Parameters: __cm_master_df__ with pd.DataFrame type & __series_list_to_include__ with list type. Example of List ["EQ","BE","BZ","SM","A","B"].

Returns: __list__ of XTS Cash Market Instruments.
___

## __List of InstrumentID for Cash Market__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#d4d4d4">|List of InstrumentID for Cash Market|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect_async</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">cm_master_string_to_df, cm_master_df_to_xts_cm_instrument_list</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">asyncio</span><br>
<br>
<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSECM]</span> <span style="color:#6a9955"># Works for BSE as well.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955">#User can swap NSEFO with BSEFO if needed.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">cm_master_df</span>&nbsp;&nbsp;<span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">cm_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">cm_instrument_list</span><span style="color:#d4d4d4">=</span><span style="color:#dcdcaa">cm_master_df_to_xts_cm_instrument_list</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">cm_master_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">cm_master_df,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">series_list_to_include</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[</span><span style="color:#ce9178">"EQ"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"BE"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"BZ"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"SM"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"A"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"B"</span><span style="color:#d4d4d4">]</span> <span style="color:#6a9955"># "EQ","BE","BZ" Are for NSE & "SM","A","B" are for BSE.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(cm_instrument_list)</span><br>
<span style="color:#c586c0">if</span> <span style="color:#d4d4d4">__name__ ==</span> <span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">())</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __Another__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#d4d4d4">|List of InstrumentID for Cash Market|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">cm_master_string_to_df, cm_master_df_to_xts_cm_instrument_list</span><br>
<br>
<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSECM]</span> <span style="color:#6a9955"># Works for BSE as well.</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#6a9955">#User can swap NSEFO with BSEFO if needed.</span><br>
<span style="color:#9cdcfe">cm_master_df</span>&nbsp;&nbsp;<span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">cm_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])</span><br>
<br>
<span style="color:#9cdcfe">cm_instrument_list</span><span style="color:#d4d4d4">=</span><span style="color:#dcdcaa">cm_master_df_to_xts_cm_instrument_list</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">cm_master_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">cm_master_df,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">series_list_to_include</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[</span><span style="color:#ce9178">"EQ"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"BE"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"BZ"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"SM"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"A"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"B"</span><span style="color:#d4d4d4">]</span> <span style="color:#6a9955"># "EQ","BE","BZ" Are for NSE & "SM","A","B" are for BSE.</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(cm_instrument_list)</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __fo_master_df_to_xts_future_instrument_list__
Converts the pandas DataFrame of fo_master API to list of xts_future_Instrument objects.
___   

Parameters: __fo_master_df__ with pd.DataFrame type & __series_list_to_include__ with list type. Example of List ["FUTIDX","FUTSTK","IF"].

Returns: __list__ of XTS Futures Instruments.
___

## __List of Instrument Id for Future Contracts__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#d4d4d4">|List of Instrument Id for Future Contracts|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect_async</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">fo_master_string_to_df, fo_master_df_to_xts_future_instrument_list</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">asyncio</span><br>
<br>
<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSEFO]</span> <span style="color:#6a9955"># Works for BSE as well.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">fo_master_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">fo_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">future_instrument_list</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">fo_master_df_to_xts_future_instrument_list</span><span style="color:#d4d4d4">(fo_master_df[0],</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">series_list_to_include</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[</span><span style="color:#ce9178">"FUTIDX"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"FUTSTK"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"IF"</span><span style="color:#d4d4d4">]</span> <span style="color:#6a9955"># "FUTIDX","FUTSTK" are for NSE & "IF" is for BSE.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(future_instrument_list)</span><br>
<span style="color:#c586c0">if</span> <span style="color:#d4d4d4">__name__ ==</span> <span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">())</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __Another__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#d4d4d4">|List of Instrument Id for Future Contracts|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">fo_master_string_to_df, fo_master_df_to_xts_future_instrument_list</span><br>
<br>
<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSEFO]</span> <span style="color:#6a9955"># Works for BSE as well.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#9cdcfe">fo_master_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">fo_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])</span><br>
<br>
<span style="color:#9cdcfe">future_instrument_list</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">fo_master_df_to_xts_future_instrument_list</span><span style="color:#d4d4d4">(fo_master_df[0],</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">series_list_to_include</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[</span><span style="color:#ce9178">"FUTIDX"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"FUTSTK"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"IF"</span><span style="color:#d4d4d4">]</span> <span style="color:#6a9955"># "FUTIDX","FUTSTK" are for NSE & "IF" is for BSE.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(future_instrument_list)</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __fo_master_df_to_xts_options_instrument_list__ 
Converts the pandas DataFrame of fo_master API to list of xts_optoins_Instrument objects
___ 
Parameters: __fo_master_df__ with pd.DataFrame type & __series_list_to_include__ with list type. Example of List : ["OPTIDX","OPTSTK","IO"].

Returns: __list__ of XTS Options Instruments.
___

## __List of Instrument Id for Future Contracts__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#d4d4d4">|List of Instrument Id for Future Contracts|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">fo_master_string_to_df, fo_master_df_to_xts_future_instrument_list</span><br>
<br>
<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSEFO]</span> <span style="color:#6a9955"># Works for BSE as well.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#9cdcfe">fo_master_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">fo_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])</span><br>
<br>
<span style="color:#9cdcfe">future_instrument_list</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">fo_master_df_to_xts_future_instrument_list</span><span style="color:#d4d4d4">(fo_master_df[0],</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">series_list_to_include</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[</span><span style="color:#ce9178">"FUTIDX"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"FUTSTK"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"IF"</span><span style="color:#d4d4d4">]</span> <span style="color:#6a9955"># "FUTIDX","FUTSTK" are for NSE & "IF" is for BSE.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(future_instrument_list)</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __List of Instrument Id for Options Contracts__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#d4d4d4">|List of Instrument Id for Options Contracts|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">fo_master_string_to_df, fo_master_df_to_xts_options_instrument_list</span><br>
<br>
<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegmentList</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[xt_market_data.EXCHANGE_NSEFO]</span> <span style="color:#6a9955"># Works for BSE as well.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<span style="color:#6a9955">#User can swap NSEFO with BSEFO if needed.</span><br>
<br>
<span style="color:#9cdcfe">fo_master_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">fo_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])</span><br>
<br>
<span style="color:#9cdcfe">options_instrument_list</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">fo_master_df_to_xts_options_instrument_list</span><span style="color:#d4d4d4">(fo_master_df[1],</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">series_list_to_include</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">[</span><span style="color:#ce9178">"OPTIDX"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"OPTSTK"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"IO"</span><span style="color:#d4d4d4">]</span> <span style="color:#6a9955"># "OPTIDX","OPTSTK" are for NSE & "IO" is for BSE.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(options_instrument_list)</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

### __ohlc_to_df__
Converts XTS-API(from XTS.Connect.get_ohlc()) generated OHLC data to pandas DataFrame.
___
Parameters: The return of __XTS.Connect.get_ohlc()__ method with dictionary type. Example of dict : {'type': 'success', 'code': 's-instrument-0002', 'description': 'Data found', 'result': {'exchangeSegment': 'NSECM', 'exchangeInstrumentID': '22', 'dataReponse': 'data removed'}}
Returns: A __pd.DataFrame__ from the OHLC values.
___

## __OHLC for Cash Market__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">|OHLC for Cash Market|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect_async</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">ohlc_to_df</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">asyncio</span><br>
<br>
<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">marget_data_get_ohlc</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_ohlc</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegment</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.EXCHANGE_NSECM,</span> <span style="color:#6a9955"># Also Works for BSECM</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeInstrumentID</span> <span style="color:#d4d4d4">=</span> <span style="color:#b5cea8">22</span><span style="color:#d4d4d4">,</span> <span style="color:#6a9955"># When using BSECM, Use BSE instrument Id like "526530"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">startTime</span> <span style="color:#d4d4d4">=</span> <span style="color:#ce9178">"Dec 02 2024 091500"</span><span style="color:#d4d4d4">,</span> <span style="color:#6a9955">#Time in IST</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">endTime</span> <span style="color:#d4d4d4">=</span> <span style="color:#ce9178">"Dec 02 2024 133000"</span><span style="color:#d4d4d4">,</span> <span style="color:#6a9955">#Time in IST, 24 hour clock.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">compressionValue</span> <span style="color:#d4d4d4">=</span> <span style="color:#b5cea8">60</span><span style="color:#d4d4d4">)</span> <span style="color:#6a9955"># 60 represents 1 minute. Check Documentation for different values.</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># Change the values oh OHLC parameters as required.</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">ohlc_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">ohlc_to_df</span><span style="color:#d4d4d4">(marget_data_get_ohlc)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(ohlc_df)</span><br>
<span style="color:#c586c0">if</span> <span style="color:#d4d4d4">__name__ ==</span> <span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">())</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>

## __OHLC for Cash Market__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">|OHLC for Cash Market|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">ohlc_to_df</span><br>
<br>
<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<br>
<span style="color:#9cdcfe">market_data_get_ohlc</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_ohlc</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegment</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.EXCHANGE_NSECM,</span> <span style="color:#6a9955"># Also Works for BSECM</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeInstrumentID</span> <span style="color:#d4d4d4">=</span> <span style="color:#b5cea8">22</span><span style="color:#d4d4d4">,</span> <span style="color:#6a9955"># When using BSECM, Use BSE instrument Id like "526530"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">startTime</span> <span style="color:#d4d4d4">=</span> <span style="color:#ce9178">"Dec 02 2024 091500"</span><span style="color:#d4d4d4">,</span> <span style="color:#6a9955">#Time in IST</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">endTime</span> <span style="color:#d4d4d4">=</span> <span style="color:#ce9178">"Dec 02 2024 133000"</span><span style="color:#d4d4d4">,</span> <span style="color:#6a9955">#Time in IST, 24 hour clock.</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">compressionValue</span> <span style="color:#d4d4d4">=</span> <span style="color:#b5cea8">60</span><span style="color:#d4d4d4">)</span> <span style="color:#6a9955"># 60 represents 1 minute. Check Documentation for different values.</span><br>
<br>
<span style="color:#6a9955"># Change the values oh OHLC parameters as required.</span><br>
<br>
<span style="color:#9cdcfe">ohlc_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">ohlc_to_df</span><span style="color:#d4d4d4">(market_data_get_ohlc)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(ohlc_df)</span><br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>


## __equityticker_exchangeInstrumentId_dict__
Converts XTS-API DataFrame (generated from XTS.Connect.get_master() with helper functoin __cm_master_string_to_df/fo_master_string_to_df__) to a dictionary. So that user can search Instrument Id with ticker symbol. IT ONLY WORKS FOR EQUITY SERIES IN CASH MARKET.
___
Parameters: The return of __cm_master_string_to_df/fo_master_string_to_df__ methods with the pd.DataFrame type.
Returns: A __Dictionary__ containing Ticker Symbol as keys & Exchange Instrument Id as values. 
___

## __Ticker:ExchangeInstrumentId Dict for Cash Market__

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#d4d4d4">|Ticker:ExchangeInstrumentId Dict for Cash Market|</span><br>
<span style="color:#d4d4d4">"""""""""""""""""""""""""""""""""""""""""""""""""""</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">cm_master_string_to_df</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.helper.helper</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">equityticker_exchangeInstrumentId_dict</span><br>
<br>
<span style="color:#9cdcfe">xt_market_data</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
<span style="color:#9cdcfe">apiKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_key,</span><br>
<span style="color:#9cdcfe">secretKey</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_secret,</span><br>
<span style="color:#9cdcfe">source</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_source,</span><br>
<span style="color:#9cdcfe">root</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">API_root</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">response_marketdata_login</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<span style="color:#9cdcfe">market_data_get_master</span> <span style="color:#d4d4d4">=</span> <span style="color:#d4d4d4">xt_market_data.</span><span style="color:#dcdcaa">get_master</span><span style="color:#d4d4d4">(exchangeSegmentList = [xt_market_data.EXCHANGE_NSECM])</span> <span style="color:#6a9955"># Works for BSECM as well.</span><br>
<br>
<span style="color:#9cdcfe">cm_master_df</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">cm_master_string_to_df</span><span style="color:#d4d4d4">(market_data_get_master[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">])</span><br>
<span style="color:#9cdcfe">ticker_exchInstrumentID_dict</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">equityticker_exchangeInstrumentId_dict</span><span style="color:#d4d4d4">(cm_master_df)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(ticker_exchInstrumentID_dict.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'RELIANCE'</span><span style="color:#d4d4d4">))</span> <span style="color:#6a9955"># Reliance is kept here as an example. User can print "ticker_exchInstrumentID_dict" for full data.</span><br>
<br>
<span style="color:#d4d4d4">""""""""""""""""""""""""""""""""""""""""""</span>
</div>


## __dostime_secomds_to_unixtime__
Converts the MS DOS time that is used by NSE & BSE to Unix epoch time.
    * The MS-DOS time/date format uses midnight on January 1, 1980 as a sentinel value, or epoch.
    * Unix epoch starts from  midnight on January 1, 1970.
The function also allowes to add timezone info to the converted time. by default it will add the timezone info of Asia/Kolkata.
_IMPORTANT: Adding timezone info makes the time aware about time zone. but the value of Uniux will remain UNCHNAGED!_
___
Parameters: ms dos time in seconds.
Returns: Time in unix epoch. 
___

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0">
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.helper.helper </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> dostime_secomds_to_unixtime</span><br>
<br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">dostime_secomds_to_unixtime</span><span style="color:#d4d4d4">(</span><span style="color:#b5cea8">1420378549</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"UTC"</span><span style="color:#d4d4d4">))</span>
</div>



## __MarketData_Socket__
Sets up Socket.io for sreaming the data.


<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0;overflow-x:auto;color:#d4d4d4">
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.xts_connect</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">XTSConnect</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.market_data_socket_client</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">MarketDataSocketClient</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">xts_api_client.market_data_socket</span> <span style="color:#c586c0">import</span> <span style="color:#dcdcaa">MDSocket_io</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">os</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">time</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">dotenv</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">load_dotenv</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">asyncio</span><br>
<span style="color:#c586c0">import</span> <span style="color:#d4d4d4">logging</span><br>
<span style="color:#c586c0">from</span> <span style="color:#d4d4d4">datetime</span> <span style="color:#c586c0">import</span> <span style="color:#d4d4d4">datetime</span><br>
<br>
<span style="color:#9cdcfe">timestamp</span> <span style="color:#d4d4d4">= datetime.</span><span style="color:#dcdcaa">now</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">strftime</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"%Y-%m-%d_%H-%M-%S"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">log_directory</span> <span style="color:#d4d4d4">=</span> <span style="color:#ce9178">r'example\socketio_example\logs'</span><br>
<br>
<span style="color:#c586c0">if</span> <span style="color:#d4d4d4">not os.path.</span><span style="color:#dcdcaa">exists</span><span style="color:#d4d4d4">(log_directory):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">os.</span><span style="color:#dcdcaa">makedirs</span><span style="color:#d4d4d4">(log_directory)</span><br>
<br>
<span style="color:#9cdcfe">logger</span> <span style="color:#d4d4d4">= logging.</span><span style="color:#dcdcaa">getLogger</span><span style="color:#d4d4d4">()</span><br>
<br>
<br>
<span style="color:#9cdcfe">log_filename</span> <span style="color:#d4d4d4">= os.path.</span><span style="color:#dcdcaa">join</span><span style="color:#d4d4d4">(log_directory, f</span><span style="color:#ce9178">"{timestamp}_example.log"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">file_handler</span> <span style="color:#d4d4d4">= logging.</span><span style="color:#dcdcaa">FileHandler</span><span style="color:#d4d4d4">(log_filename)</span><br>
<span style="color:#d4d4d4">file_handler.</span><span style="color:#dcdcaa">setLevel</span><span style="color:#d4d4d4">(logging.DEBUG)</span><br>
<span style="color:#9cdcfe">file_format</span> <span style="color:#d4d4d4">= logging.</span><span style="color:#dcdcaa">Formatter</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'%(asctime)s %(levelname)s: %(message)s'</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#d4d4d4">file_handler.</span><span style="color:#dcdcaa">setFormatter</span><span style="color:#d4d4d4">(file_format)</span><br>
<span style="color:#d4d4d4">logger.</span><span style="color:#dcdcaa">addHandler</span><span style="color:#d4d4d4">(file_handler)</span><br>
<span style="color:#d4d4d4">logger.</span><span style="color:#dcdcaa">setLevel</span><span style="color:#d4d4d4">(logging.DEBUG)</span><br>
<br>
<br>
<span style="color:#9cdcfe">Instruments</span> <span style="color:#d4d4d4">= [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{</span><span style="color:#ce9178">'exchangeSegment'</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">'exchangeInstrumentID'</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{</span><span style="color:#ce9178">'exchangeSegment'</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">'exchangeInstrumentID'</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">26000</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{</span><span style="color:#ce9178">'exchangeSegment'</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">'exchangeInstrumentID'</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">51601</span><span style="color:#d4d4d4">}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
<br>
<br>
<span style="color:#c586c0">class</span> <span style="color:#4ec9b0">XTS_MarketDataSocketClient</span><span style="color:#d4d4d4">(MarketDataSocketClient):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">test</span><span style="color:#d4d4d4">(self):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">load_dotenv</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">API_key</span> <span style="color:#d4d4d4">= os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_MARKETDATA_API_KEY"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">API_secret</span> <span style="color:#d4d4d4">= os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_MARKETDATA_SECRET_KEY"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">API_source</span> <span style="color:#d4d4d4">= os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_SOURCE"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">API_root</span> <span style="color:#d4d4d4">= os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_API_URL"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTSConnect</span><span style="color:#d4d4d4">(API_key, API_secret, API_source, API_root, disable_ssl=</span><span style="color:#569cd6">True</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response</span> <span style="color:#d4d4d4">= xt.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">marketDataToken</span> <span style="color:#d4d4d4">= response[</span><span style="color:#ce9178">"result"</span><span style="color:#d4d4d4">][</span><span style="color:#ce9178">"token"</span><span style="color:#d4d4d4">]</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">userID</span> <span style="color:#d4d4d4">= response[</span><span style="color:#ce9178">"result"</span><span style="color:#d4d4d4">][</span><span style="color:#ce9178">"userID"</span><span style="color:#d4d4d4">]</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">socket</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">MDSocket_io</span><span style="color:#d4d4d4">(marketDataToken, userID, API_root, self)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span> <span style="color:#d4d4d4">socket.</span><span style="color:#dcdcaa">connect</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># response_1105 = xt.send_subscription(Instruments, 1105)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># logging.info(f"Subscription Response: {response_1105}")</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_1501</span> <span style="color:#d4d4d4">= xt.</span><span style="color:#dcdcaa">send_subscription</span><span style="color:#d4d4d4">(Instruments, </span><span style="color:#b5cea8">1501</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">logging.</span><span style="color:#dcdcaa">info</span><span style="color:#d4d4d4">(f</span><span style="color:#ce9178">"Subscription Response: {response_1501}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_1502</span> <span style="color:#d4d4d4">= xt.</span><span style="color:#dcdcaa">send_subscription</span><span style="color:#d4d4d4">(Instruments, </span><span style="color:#b5cea8">1502</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">logging.</span><span style="color:#dcdcaa">info</span><span style="color:#d4d4d4">(f</span><span style="color:#ce9178">"Subscription Response: {response_1502}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># response_1505 = xt.send_subscription(Instruments, 1505)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># logging.info(f"Subscription Response: {response_1505}")</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># response_1507 = xt.send_subscription(Instruments, 1507)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># logging.info(f"Subscription Response: {response_1507}")</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_1510</span> <span style="color:#d4d4d4">= xt.</span><span style="color:#dcdcaa">send_subscription</span><span style="color:#d4d4d4">(Instruments, </span><span style="color:#b5cea8">1510</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">logging.</span><span style="color:#dcdcaa">info</span><span style="color:#d4d4d4">(f</span><span style="color:#ce9178">"Subscription Response: {response_1510}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_1512</span> <span style="color:#d4d4d4">= xt.</span><span style="color:#dcdcaa">send_subscription</span><span style="color:#d4d4d4">(Instruments, </span><span style="color:#b5cea8">1512</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">logging.</span><span style="color:#dcdcaa">info</span><span style="color:#d4d4d4">(f</span><span style="color:#ce9178">"Subscription Response: {response_1512}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span> <span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(</span><span style="color:#b5cea8">50</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span> <span style="color:#d4d4d4">socket.</span><span style="color:#dcdcaa">disconnect</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">xt.</span><span style="color:#dcdcaa">marketdata_logout</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_connect</span><span style="color:#d4d4d4">(self):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Market Data Socket connected successfully!"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_disconnect</span><span style="color:#d4d4d4">(self):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Market Data Socket disconnected!"</span><span style="color:#d4d4d4">)</span><br>
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_message</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_market_data_full</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1502:Market Data full"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1502 Market depth message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_market_status_full</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1507:Market Status full"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1507 MarketStatus message!'</span><span style="color:#d4d4d4"> + data)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_last_traded_price_full</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1512:LTP full"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1512 LTP message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_candle_data_full</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1505:Candle Data full"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1505 Candle data message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_openinterest_full</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1510:OpenInterest full"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1510 Open interest message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_touchline_full</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1501:Touchline full"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1501 Level1,Touchline message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_instrument_change_full</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(f</span><span style="color:#ce9178">'I received a 1105:Instrument Change full: {data}'</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_market_data_partial</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1502:Market Data partial"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1502 Market depth partial message!'</span><span style="color:#d4d4d4"> + data)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_last_traded_price_partial</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1512:LTP partial"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1512 LTP partial message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_candle_data_partial</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1505:Candle Data partial"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1505 Candle data partial message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_openinterest_partial</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1510:OpenInterest partial"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1510 Open interest partial message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_touchline_partial</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1501:Touchline partial"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received a 1501 Level1,Touchline partial message!'</span><span style="color:#d4d4d4"> + data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_event_instrument_change_partial</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""On receiving message code 1105:Instrument Change partial"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(f</span><span style="color:#ce9178">'I received a 1105:Instrument Change partial: {data}'</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">on_error</span><span style="color:#d4d4d4">(self, data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""Error from the socket"""</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'I received an error!'</span><span style="color:#d4d4d4"> + data)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<br>
<br>
<span style="color:#6a9955"># Running the test method in an event loop</span><br>
<span style="color:#c586c0">async</span> <span style="color:#c586c0">def</span> <span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">obj</span> <span style="color:#d4d4d4">=</span> <span style="color:#dcdcaa">XTS_MarketDataSocketClient</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span> <span style="color:#d4d4d4">obj.</span><span style="color:#dcdcaa">test</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span> <span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(</span><span style="color:#b5cea8">5</span><span style="color:#d4d4d4">)</span><br>
<br>
<br>
<br>
<span style="color:#6a9955"># Execute the async main function</span><br>
<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">())</span>
</div>