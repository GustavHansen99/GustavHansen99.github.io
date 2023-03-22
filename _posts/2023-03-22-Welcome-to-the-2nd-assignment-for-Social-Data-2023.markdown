---
layout: post
title:  "Welcome to the 2nd assignment for Social Data 2023"
date:   2023-03-22 12:25:55 +01:00
categories: Social Data Viz
---

# Header 1

## Header 2

### Header 3

body

<figure>
    <img src='/assets/images/assault_polar.jpg' width=400 height=300 class="center">
    <figcaption>Figure 1: Some text here</figcaption>
</figure>

balbalbalan \\

<figure>
    <img src='/assets/images/assault_map.jpg' width=400 height=300 class="center">
    <figcaption>Figure 2: Some text here</figcaption>
</figure>


<html lang="en">
  
  <head>
    
      <meta charset="utf-8">
      <title>Bokeh Plot</title>
      
      
        
          
        
        
          
        <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js" integrity="sha384-T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM" crossorigin="anonymous"></script>
        <script type="text/javascript">
            Bokeh.set_log_level("info");
        </script>
        
      
      
    
  </head>
  
  
  <body>
    
      
        
          
          
            
              <div class="bk-root" id="044c4ebd-c50d-4da3-8f7f-898d46875f27" data-root-id="1150"></div>
            
          
        
      
      
        <script type="application/json" id="1375">
          {"c9406b3d-10bc-4001-82ea-a8e8c82d8de0":{"roots":{"references":[{"attributes":{},"id":"1164","type":"BasicTicker"},{"attributes":{},"id":"1189","type":"CategoricalTickFormatter"},{"attributes":{"label":{"value":"BURGLARY"},"renderers":[{"id":"1185"}]},"id":"1288","type":"LegendItem"},{"attributes":{"label":{"value":"LARCENY/THEFT"},"renderers":[{"id":"1201"}]},"id":"1289","type":"LegendItem"},{"attributes":{},"id":"1191","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#aec7e8"},"line_alpha":{"value":0.5},"line_color":{"value":"#aec7e8"},"top":{"field":"LARCENY/THEFT"},"x":{"field":"Hour_hour"}},"id":"1200","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#2ca02c"},"line_alpha":{"value":0.5},"line_color":{"value":"#2ca02c"},"top":{"field":"ASSAULT"},"x":{"field":"Hour_hour"}},"id":"1245","type":"VBar"},{"attributes":{"label":{"value":"ROBBERY"},"renderers":[{"id":"1216"}]},"id":"1290","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2ca02c"},"line_alpha":{"value":0.1},"line_color":{"value":"#2ca02c"},"top":{"field":"ASSAULT"},"x":{"field":"Hour_hour"}},"id":"1244","type":"VBar"},{"attributes":{"axis":{"id":"1160"},"ticker":null},"id":"1162","type":"Grid"},{"attributes":{"label":{"value":"ASSAULT"},"renderers":[{"id":"1246"}]},"id":"1292","type":"LegendItem"},{"attributes":{"label":{"value":"LARCENY/THEFT"},"renderers":[{"id":"1201"}]},"id":"1211","type":"LegendItem"},{"attributes":{"label":{"value":"VEHICLE THEFT"},"renderers":[{"id":"1276"}]},"id":"1294","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#98df8a"},"line_alpha":{"value":0.1},"line_color":{"value":"#98df8a"},"top":{"field":"DISORDERLY CONDUCT"},"x":{"field":"Hour_hour"}},"id":"1259","type":"VBar"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1243"},"hover_glyph":null,"muted":true,"muted_glyph":{"id":"1245"},"nonselection_glyph":{"id":"1244"},"selection_glyph":null,"view":{"id":"1247"}},"id":"1246","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1148"}},"id":"1247","type":"CDSView"},{"attributes":{"label":{"value":"ASSAULT"},"renderers":[{"id":"1246"}]},"id":"1256","type":"LegendItem"},{"attributes":{"source":{"id":"1148"}},"id":"1202","type":"CDSView"},{"attributes":{"axis":{"id":"1163"},"dimension":1,"ticker":null},"id":"1166","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"BURGLARY"},"x":{"field":"Hour_hour"}},"id":"1184","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"BURGLARY"},"x":{"field":"Hour_hour"}},"id":"1183","type":"VBar"},{"attributes":{},"id":"1167","type":"PanTool"},{"attributes":{"data":{"ASSAULT":{"__ndarray__":"klDS+KW7qz98AOJ6JTypP5K/G+NRpKY/syGOnfU7lj+hqVLnsgCMP691xdrxRoY/RSsbYEUWjj9vC+5hsiqWP1EbMHHA/6A/jM+/TWoGoz9UsrxFIB+lPwzpP01NfKY/B3jJvhukqz/k0cMxlGOoPwncVZS116g/cZtmPIatqz+rWrMtQmmrP1boJyTsjqs/529kAIAfqz9OQUa37kaqP6+6luhVhKk/8nYpKJGCqj+ctU03RUqpPxXjGrzGOqg/","dtype":"float64","order":"little","shape":[24]},"BURGLARY":{"__ndarray__":"qCBtVJ2Toz9UAYWq12OZP4QsLPo6ZJs/PCdBdaNHnD/9DCkPXRCZP335Y/zL5JY/EbIj0o3qlj/HWtSRVLShPxjl68/8aas/ieK1pogHqD8+2/slKEKmP1Ta+oS1DKU/OqQxP5A9rD8Qi5msa5OiP1uSUy3MWKQ/pL7I14XMpz/OtCa15YqqP1yWo50pxLE/rH7BYFfvsT/gVdEHufmqP+ULW7QGnac/wkwVRXPJpj8lLhP7B6ulP7xEJ92DDKQ/","dtype":"float64","order":"little","shape":[24]},"DISORDERLY CONDUCT":{"__ndarray__":"2kDJIDbBqj8UO7ETO7GjPwaxCdaMrqE/Hr4E5hNFlj/eeRZCBX+QP8pIylIvd6Q/jJBirKj0uT8M3eAZZ4i3P6om0wAolLE/8ubACzp/qj9iokPQdKGmPxE0XahlQqQ/ETRdqGVCpD+hEde+p0ejPxxQrVW7/aE/23LC1i8QoT+rYjHbhoyfPz5H/1yeAJ4/xdMeVwHBoD/t2Bg1j6GbPw6UDGITrJk/tn6BiNxHnT/NTx6+BOajP1IRSCfxL6U/","dtype":"float64","order":"little","shape":[24]},"Hour_hour":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"LARCENY/THEFT":{"__ndarray__":"iBLodKt1pD+lziBWQT2ZP8ZN0T0jb5A/X5Bw3+6lhD8WhhdpuN96P2wn7yrSAns/GLtTJTU8hT/N+kzwf7GQP6YCd0PTUJw/UxK2qF/MoD9seKShAfakP8UXrp8xDKc/LJEvDOCFrT88a6Zn1CuqP0dubAIlDKs/JskhgUWzrD99mqqk3wquPxsKO9h6IrE/oYaSweGLtD+aGylQq0mzP+upr0xs1bA/+anBVOhfrD8WE23knKSrP5Qd+CYfFKk/","dtype":"float64","order":"little","shape":[24]},"ROBBERY":{"__ndarray__":"4mFiFMWnqz8sz8bX+YmsP4cPCK/Yzq0/hGH81bj2oT9PC15djUGXP05DsFb8GJQ/4Md2GPl+kz9NNNhwfVWRP05kocqIcJM/TwteXY1Blz8HJMW40NiaPywggaWR/J0/Kbmfq1+/oT+pLe9obv+iP/Mt8OFTA6Q/qhvW2mBrpj89QhE4jbaoP2LjgmgMkKg/UK3S+Lwmqj9i0Wna/vurP1E45g4KjK8/YJpROtjZsT+OyEZkI7KxP9YF4s1MebA/","dtype":"float64","order":"little","shape":[24]},"STOLEN PROPERTY":{"__ndarray__":"wzeVY7F1qD/Ch3T6q0KhP0FZxK364pw/S3LUJVqglj+Dr6ciTR+UP8Tntcy2qI8/uux6H0CekT+YAn4WnfOYP5y/H4IKGaA/p4hQY28JoT/8s/MuHgGjP+o+darMq6Y/DomzhXq8rT9FxoaCbTurP/OJj+49g60/uB6F61G4rj/aWGGL7y+wPxjyopTURrA/JRsVSESdrz/ZyfYle1aqP+bRstVZU6g/dqfrcm4ipj/qPnWqzKumPwqrWxZ8PaU/","dtype":"float64","order":"little","shape":[24]},"VEHICLE THEFT":{"__ndarray__":"f6o7AUhEoz/PHiJqIVWaPzsVm7cr15Q/JifutyPpiT/nmxb5QwGEP+SH3URrBYQ/HPD6r+ewjT+MCbswdWqZP1bwjjxrOaI/pYva9MXWoT+FyMoffcCgP9fVaEENBp4/JyI2o9Utpj+nuB4xBYCfPyN/KIDCeKI/fKDlluvDpT8v2Xx6wd6pP7vtW4xiHLE/sLZohCbktD9MtOMf4UWyP5FTZ7N5LrM/qskh/+5vsj/YISTSkHSzP9VIFgEy/LA/","dtype":"float64","order":"little","shape":[24]}},"selected":{"id":"1194"},"selection_policy":{"id":"1193"}},"id":"1148","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1173","type":"BoxAnnotation"},{"attributes":{"label":{"value":"BURGLARY"},"renderers":[{"id":"1185"}]},"id":"1196","type":"LegendItem"},{"attributes":{},"id":"1193","type":"UnionRenderers"},{"attributes":{},"id":"1194","type":"Selection"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1198"},"hover_glyph":null,"muted":true,"muted_glyph":{"id":"1200"},"nonselection_glyph":{"id":"1199"},"selection_glyph":null,"view":{"id":"1202"}},"id":"1201","type":"GlyphRenderer"},{"attributes":{},"id":"1158","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#98df8a"},"line_color":{"value":"#98df8a"},"top":{"field":"DISORDERLY CONDUCT"},"x":{"field":"Hour_hour"}},"id":"1258","type":"VBar"},{"attributes":{"fill_color":{"value":"#ff7f0e"},"line_color":{"value":"#ff7f0e"},"top":{"field":"ROBBERY"},"x":{"field":"Hour_hour"}},"id":"1213","type":"VBar"},{"attributes":{"axis_label":"Hour of Day","formatter":{"id":"1189"},"ticker":{"id":"1161"}},"id":"1160","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#98df8a"},"line_alpha":{"value":0.5},"line_color":{"value":"#98df8a"},"top":{"field":"DISORDERLY CONDUCT"},"x":{"field":"Hour_hour"}},"id":"1260","type":"VBar"},{"attributes":{},"id":"1156","type":"CategoricalScale"},{"attributes":{"label":{"value":"STOLEN PROPERTY"},"renderers":[{"id":"1231"}]},"id":"1291","type":"LegendItem"},{"attributes":{"label":{"value":"DISORDERLY CONDUCT"},"renderers":[{"id":"1261"}]},"id":"1293","type":"LegendItem"},{"attributes":{"label":{"value":"DISORDERLY CONDUCT"},"renderers":[{"id":"1261"}]},"id":"1271","type":"LegendItem"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1258"},"hover_glyph":null,"muted":true,"muted_glyph":{"id":"1260"},"nonselection_glyph":{"id":"1259"},"selection_glyph":null,"view":{"id":"1262"}},"id":"1261","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1148"}},"id":"1262","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#aec7e8"},"line_alpha":{"value":0.1},"line_color":{"value":"#aec7e8"},"top":{"field":"LARCENY/THEFT"},"x":{"field":"Hour_hour"}},"id":"1199","type":"VBar"},{"attributes":{},"id":"1161","type":"CategoricalTicker"},{"attributes":{},"id":"1154","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#ff7f0e"},"line_alpha":{"value":0.5},"line_color":{"value":"#ff7f0e"},"top":{"field":"ROBBERY"},"x":{"field":"Hour_hour"}},"id":"1215","type":"VBar"},{"attributes":{"fill_color":{"value":"#d62728"},"line_color":{"value":"#d62728"},"top":{"field":"VEHICLE THEFT"},"x":{"field":"Hour_hour"}},"id":"1273","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff7f0e"},"line_alpha":{"value":0.1},"line_color":{"value":"#ff7f0e"},"top":{"field":"ROBBERY"},"x":{"field":"Hour_hour"}},"id":"1214","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffbb78"},"line_alpha":{"value":0.1},"line_color":{"value":"#ffbb78"},"top":{"field":"STOLEN PROPERTY"},"x":{"field":"Hour_hour"}},"id":"1229","type":"VBar"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1213"},"hover_glyph":null,"muted":true,"muted_glyph":{"id":"1215"},"nonselection_glyph":{"id":"1214"},"selection_glyph":null,"view":{"id":"1217"}},"id":"1216","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1148"}},"id":"1217","type":"CDSView"},{"attributes":{"axis_label":"Normalized Count","formatter":{"id":"1191"},"ticker":{"id":"1164"}},"id":"1163","type":"LinearAxis"},{"attributes":{"label":{"value":"ROBBERY"},"renderers":[{"id":"1216"}]},"id":"1226","type":"LegendItem"},{"attributes":{"text":"Crime Counts by Hour and Category"},"id":"1151","type":"Title"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1182"},"hover_glyph":null,"muted":true,"muted_glyph":{"id":"1184"},"nonselection_glyph":{"id":"1183"},"selection_glyph":null,"view":{"id":"1186"}},"id":"1185","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#d62728"},"line_alpha":{"value":0.5},"line_color":{"value":"#d62728"},"top":{"field":"VEHICLE THEFT"},"x":{"field":"Hour_hour"}},"id":"1275","type":"VBar"},{"attributes":{"factors":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"]},"id":"1149","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#d62728"},"line_alpha":{"value":0.1},"line_color":{"value":"#d62728"},"top":{"field":"VEHICLE THEFT"},"x":{"field":"Hour_hour"}},"id":"1274","type":"VBar"},{"attributes":{"label":{"value":"VEHICLE THEFT"},"renderers":[{"id":"1276"}]},"id":"1286","type":"LegendItem"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1273"},"hover_glyph":null,"muted":true,"muted_glyph":{"id":"1275"},"nonselection_glyph":{"id":"1274"},"selection_glyph":null,"view":{"id":"1277"}},"id":"1276","type":"GlyphRenderer"},{"attributes":{},"id":"1172","type":"HelpTool"},{"attributes":{"below":[{"id":"1160"}],"center":[{"id":"1162"},{"id":"1166"},{"id":"1195"}],"left":[{"id":"1163"},{"id":"1287"}],"plot_height":400,"plot_width":800,"renderers":[{"id":"1185"},{"id":"1201"},{"id":"1216"},{"id":"1231"},{"id":"1246"},{"id":"1261"},{"id":"1276"}],"title":{"id":"1151"},"toolbar":{"id":"1174"},"x_range":{"id":"1149"},"x_scale":{"id":"1156"},"y_range":{"id":"1154"},"y_scale":{"id":"1158"}},"id":"1150","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1167"},{"id":"1168"},{"id":"1169"},{"id":"1170"},{"id":"1171"},{"id":"1172"}]},"id":"1174","type":"Toolbar"},{"attributes":{"source":{"id":"1148"}},"id":"1277","type":"CDSView"},{"attributes":{"fill_color":{"value":"#ffbb78"},"line_color":{"value":"#ffbb78"},"top":{"field":"STOLEN PROPERTY"},"x":{"field":"Hour_hour"}},"id":"1228","type":"VBar"},{"attributes":{"click_policy":"hide","items":[{"id":"1288"},{"id":"1289"},{"id":"1290"},{"id":"1291"},{"id":"1292"},{"id":"1293"},{"id":"1294"}],"location":[0,0]},"id":"1287","type":"Legend"},{"attributes":{},"id":"1171","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#ffbb78"},"line_alpha":{"value":0.5},"line_color":{"value":"#ffbb78"},"top":{"field":"STOLEN PROPERTY"},"x":{"field":"Hour_hour"}},"id":"1230","type":"VBar"},{"attributes":{"fill_color":{"value":"#2ca02c"},"line_color":{"value":"#2ca02c"},"top":{"field":"ASSAULT"},"x":{"field":"Hour_hour"}},"id":"1243","type":"VBar"},{"attributes":{"overlay":{"id":"1173"}},"id":"1169","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1228"},"hover_glyph":null,"muted":true,"muted_glyph":{"id":"1230"},"nonselection_glyph":{"id":"1229"},"selection_glyph":null,"view":{"id":"1232"}},"id":"1231","type":"GlyphRenderer"},{"attributes":{},"id":"1168","type":"WheelZoomTool"},{"attributes":{"click_policy":"hide","items":[{"id":"1196"},{"id":"1211"},{"id":"1226"},{"id":"1241"},{"id":"1256"},{"id":"1271"},{"id":"1286"}],"visible":false},"id":"1195","type":"Legend"},{"attributes":{},"id":"1170","type":"SaveTool"},{"attributes":{"source":{"id":"1148"}},"id":"1232","type":"CDSView"},{"attributes":{"label":{"value":"STOLEN PROPERTY"},"renderers":[{"id":"1231"}]},"id":"1241","type":"LegendItem"},{"attributes":{"source":{"id":"1148"}},"id":"1186","type":"CDSView"},{"attributes":{"fill_color":{"value":"#aec7e8"},"line_color":{"value":"#aec7e8"},"top":{"field":"LARCENY/THEFT"},"x":{"field":"Hour_hour"}},"id":"1198","type":"VBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"BURGLARY"},"x":{"field":"Hour_hour"}},"id":"1182","type":"VBar"}],"root_ids":["1150"]},"title":"Bokeh Application","version":"2.2.3"}}
        </script>
        <script type="text/javascript">
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = document.getElementById('1375').textContent;
                  var render_items = [{"docid":"c9406b3d-10bc-4001-82ea-a8e8c82d8de0","root_ids":["1150"],"roots":{"1150":"044c4ebd-c50d-4da3-8f7f-898d46875f27"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        </script>
    
  </body>
  
</html>