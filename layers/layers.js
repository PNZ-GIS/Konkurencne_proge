var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Esritopo_1 = new ol.layer.Tile({
            'title': 'Esri topo',
            'type': 'base',
            'opacity': 0.509000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Esrisatelit_2 = new ol.layer.Tile({
            'title': 'Esri satelit',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Carto_light_nolabels_3 = new ol.layer.Tile({
            'title': 'Carto_light_nolabels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Drave_4 = new ol.format.GeoJSON();
var features_Drave_4 = format_Drave_4.readFeatures(json_Drave_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drave_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drave_4.addFeatures(features_Drave_4);
var lyr_Drave_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drave_4, 
                style: style_Drave_4,
                interactive: false,
                title: '<img src="styles/legend/Drave_4.png" /> Države'
            });
var lyr_IT_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "IT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IT_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [611039.430757, 4236957.334643, 2119046.033771, 6020672.617064]
                            })
                        });
var lyr_AT_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "AT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AT_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1053465.072614, 5825030.176486, 1915869.769652, 6297069.407299]
                            })
                        });
var lyr_HU_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "HU",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HU_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1768068.497916, 5693212.506719, 2633995.267813, 6232933.986586]
                            })
                        });
var lyr_HR_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "HR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HR_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1569296.836371, 5562971.318802, 2165900.170118, 5880145.131947]
                            })
                        });
var format_Slovenija_9 = new ol.format.GeoJSON();
var features_Slovenija_9 = format_Slovenija_9.readFeatures(json_Slovenija_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Slovenija_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Slovenija_9.addFeatures(features_Slovenija_9);
var lyr_Slovenija_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Slovenija_9, 
                style: style_Slovenija_9,
                interactive: false,
                title: '<img src="styles/legend/Slovenija_9.png" /> Slovenija'
            });
var format_Kulturna_dediscina_10 = new ol.format.GeoJSON();
var features_Kulturna_dediscina_10 = format_Kulturna_dediscina_10.readFeatures(json_Kulturna_dediscina_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulturna_dediscina_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulturna_dediscina_10.addFeatures(features_Kulturna_dediscina_10);
var lyr_Kulturna_dediscina_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulturna_dediscina_10, 
                style: style_Kulturna_dediscina_10,
                interactive: false,
                title: '<img src="styles/legend/Kulturna_dediscina_10.png" /> Kulturna_dediscina'
            });
var format_Natura_2000_11 = new ol.format.GeoJSON();
var features_Natura_2000_11 = format_Natura_2000_11.readFeatures(json_Natura_2000_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura_2000_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura_2000_11.addFeatures(features_Natura_2000_11);
var lyr_Natura_2000_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Natura_2000_11, 
                style: style_Natura_2000_11,
                interactive: false,
                title: '<img src="styles/legend/Natura_2000_11.png" /> Natura_2000'
            });
var format_VVO_dravni_nivo_12 = new ol.format.GeoJSON();
var features_VVO_dravni_nivo_12 = format_VVO_dravni_nivo_12.readFeatures(json_VVO_dravni_nivo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVO_dravni_nivo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVO_dravni_nivo_12.addFeatures(features_VVO_dravni_nivo_12);
var lyr_VVO_dravni_nivo_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVO_dravni_nivo_12, 
                style: style_VVO_dravni_nivo_12,
                interactive: false,
                title: '<img src="styles/legend/VVO_dravni_nivo_12.png" /> VVO_državni_nivo'
            });
var format_VVO_obcinski_nivo_13 = new ol.format.GeoJSON();
var features_VVO_obcinski_nivo_13 = format_VVO_obcinski_nivo_13.readFeatures(json_VVO_obcinski_nivo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVO_obcinski_nivo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVO_obcinski_nivo_13.addFeatures(features_VVO_obcinski_nivo_13);
var lyr_VVO_obcinski_nivo_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVO_obcinski_nivo_13, 
                style: style_VVO_obcinski_nivo_13,
                interactive: false,
                title: '<img src="styles/legend/VVO_obcinski_nivo_13.png" /> VVO_obcinski_nivo'
            });
var format_CesteACinHC_14 = new ol.format.GeoJSON();
var features_CesteACinHC_14 = format_CesteACinHC_14.readFeatures(json_CesteACinHC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CesteACinHC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CesteACinHC_14.addFeatures(features_CesteACinHC_14);
var lyr_CesteACinHC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CesteACinHC_14, 
                style: style_CesteACinHC_14,
                interactive: false,
                title: '<img src="styles/legend/CesteACinHC_14.png" /> Ceste (AC in HC)'
            });
var format_Obstojeeproge_15 = new ol.format.GeoJSON();
var features_Obstojeeproge_15 = format_Obstojeeproge_15.readFeatures(json_Obstojeeproge_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeeproge_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeeproge_15.addFeatures(features_Obstojeeproge_15);
var lyr_Obstojeeproge_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeeproge_15, 
                style: style_Obstojeeproge_15,
                interactive: false,
                title: '<img src="styles/legend/Obstojeeproge_15.png" /> Obstoječe proge'
            });
var format_Obstojeepostaje_16 = new ol.format.GeoJSON();
var features_Obstojeepostaje_16 = format_Obstojeepostaje_16.readFeatures(json_Obstojeepostaje_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeepostaje_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeepostaje_16.addFeatures(features_Obstojeepostaje_16);
var lyr_Obstojeepostaje_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeepostaje_16, 
                style: style_Obstojeepostaje_16,
                interactive: false,
                title: '<img src="styles/legend/Obstojeepostaje_16.png" /> Obstoječe postaje'
            });
var format_DivaaKoper2tir_17 = new ol.format.GeoJSON();
var features_DivaaKoper2tir_17 = format_DivaaKoper2tir_17.readFeatures(json_DivaaKoper2tir_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaKoper2tir_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaKoper2tir_17.addFeatures(features_DivaaKoper2tir_17);
var lyr_DivaaKoper2tir_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaKoper2tir_17, 
                style: style_DivaaKoper2tir_17,
                interactive: false,
                title: '<img src="styles/legend/DivaaKoper2tir_17.png" /> Divača-Koper (2. tir)'
            });
var format_Dolenjskaproga_18 = new ol.format.GeoJSON();
var features_Dolenjskaproga_18 = format_Dolenjskaproga_18.readFeatures(json_Dolenjskaproga_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dolenjskaproga_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dolenjskaproga_18.addFeatures(features_Dolenjskaproga_18);
var lyr_Dolenjskaproga_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dolenjskaproga_18, 
                style: style_Dolenjskaproga_18,
                interactive: false,
                title: '<img src="styles/legend/Dolenjskaproga_18.png" /> Dolenjska proga'
            });
var format_DomaleKranjZlatoPolje_19 = new ol.format.GeoJSON();
var features_DomaleKranjZlatoPolje_19 = format_DomaleKranjZlatoPolje_19.readFeatures(json_DomaleKranjZlatoPolje_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomaleKranjZlatoPolje_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomaleKranjZlatoPolje_19.addFeatures(features_DomaleKranjZlatoPolje_19);
var lyr_DomaleKranjZlatoPolje_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DomaleKranjZlatoPolje_19, 
                style: style_DomaleKranjZlatoPolje_19,
                interactive: false,
                title: '<img src="styles/legend/DomaleKranjZlatoPolje_19.png" /> Domžale-Kranj Zlato Polje'
            });
var format_MosteDomale_20 = new ol.format.GeoJSON();
var features_MosteDomale_20 = format_MosteDomale_20.readFeatures(json_MosteDomale_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MosteDomale_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MosteDomale_20.addFeatures(features_MosteDomale_20);
var lyr_MosteDomale_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MosteDomale_20, 
                style: style_MosteDomale_20,
                interactive: false,
                title: '<img src="styles/legend/MosteDomale_20.png" /> Moste-Domžale'
            });
var format_Zahodnaobvoznaproga_21 = new ol.format.GeoJSON();
var features_Zahodnaobvoznaproga_21 = format_Zahodnaobvoznaproga_21.readFeatures(json_Zahodnaobvoznaproga_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zahodnaobvoznaproga_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zahodnaobvoznaproga_21.addFeatures(features_Zahodnaobvoznaproga_21);
var lyr_Zahodnaobvoznaproga_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zahodnaobvoznaproga_21, 
                style: style_Zahodnaobvoznaproga_21,
                interactive: false,
                title: '<img src="styles/legend/Zahodnaobvoznaproga_21.png" /> Zahodna obvozna proga'
            });
var format_Kamnikaproga_22 = new ol.format.GeoJSON();
var features_Kamnikaproga_22 = format_Kamnikaproga_22.readFeatures(json_Kamnikaproga_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kamnikaproga_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kamnikaproga_22.addFeatures(features_Kamnikaproga_22);
var lyr_Kamnikaproga_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kamnikaproga_22, 
                style: style_Kamnikaproga_22,
                interactive: false,
                title: '<img src="styles/legend/Kamnikaproga_22.png" /> Kamniška proga'
            });
var format_K3LJJES_23 = new ol.format.GeoJSON();
var features_K3LJJES_23 = format_K3LJJES_23.readFeatures(json_K3LJJES_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3LJJES_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3LJJES_23.addFeatures(features_K3LJJES_23);
var lyr_K3LJJES_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3LJJES_23, 
                style: style_K3LJJES_23,
                interactive: false,
                title: '<img src="styles/legend/K3LJJES_23.png" /> K3 LJ-JES'
            });
var format_K3_LJZMSuhadol_24 = new ol.format.GeoJSON();
var features_K3_LJZMSuhadol_24 = format_K3_LJZMSuhadol_24.readFeatures(json_K3_LJZMSuhadol_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_LJZMSuhadol_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_LJZMSuhadol_24.addFeatures(features_K3_LJZMSuhadol_24);
var lyr_K3_LJZMSuhadol_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_LJZMSuhadol_24, 
                style: style_K3_LJZMSuhadol_24,
                interactive: false,
                title: '<img src="styles/legend/K3_LJZMSuhadol_24.png" /> K3_LJ-ZM(Suhadol)'
            });
var format_K3_MBMS_25 = new ol.format.GeoJSON();
var features_K3_MBMS_25 = format_K3_MBMS_25.readFeatures(json_K3_MBMS_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_MBMS_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_MBMS_25.addFeatures(features_K3_MBMS_25);
var lyr_K3_MBMS_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_MBMS_25, 
                style: style_K3_MBMS_25,
                interactive: false,
                title: '<img src="styles/legend/K3_MBMS_25.png" /> K3_MB-MS'
            });
var format_K3_ZMSuhadolCE_26 = new ol.format.GeoJSON();
var features_K3_ZMSuhadolCE_26 = format_K3_ZMSuhadolCE_26.readFeatures(json_K3_ZMSuhadolCE_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_ZMSuhadolCE_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_ZMSuhadolCE_26.addFeatures(features_K3_ZMSuhadolCE_26);
var lyr_K3_ZMSuhadolCE_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_ZMSuhadolCE_26, 
                style: style_K3_ZMSuhadolCE_26,
                interactive: false,
                title: '<img src="styles/legend/K3_ZMSuhadolCE_26.png" /> K3_ZM(Suhadol)-CE'
            });
var format_K3_CEMB_27 = new ol.format.GeoJSON();
var features_K3_CEMB_27 = format_K3_CEMB_27.readFeatures(json_K3_CEMB_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_CEMB_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_CEMB_27.addFeatures(features_K3_CEMB_27);
var lyr_K3_CEMB_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_CEMB_27, 
                style: style_K3_CEMB_27,
                interactive: false,
                title: '<img src="styles/legend/K3_CEMB_27.png" /> K3_CE-MB'
            });
var format_K3_LJDI_28 = new ol.format.GeoJSON();
var features_K3_LJDI_28 = format_K3_LJDI_28.readFeatures(json_K3_LJDI_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_LJDI_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_LJDI_28.addFeatures(features_K3_LJDI_28);
var lyr_K3_LJDI_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_LJDI_28, 
                style: style_K3_LJDI_28,
                interactive: false,
                title: '<img src="styles/legend/K3_LJDI_28.png" /> K3_LJ-DI'
            });
var format_K3_DIIT_29 = new ol.format.GeoJSON();
var features_K3_DIIT_29 = format_K3_DIIT_29.readFeatures(json_K3_DIIT_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_DIIT_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_DIIT_29.addFeatures(features_K3_DIIT_29);
var lyr_K3_DIIT_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_DIIT_29, 
                style: style_K3_DIIT_29,
                interactive: false,
                title: '<img src="styles/legend/K3_DIIT_29.png" /> K3_DI-IT'
            });
var format_K2_LJZMCEMB_30 = new ol.format.GeoJSON();
var features_K2_LJZMCEMB_30 = format_K2_LJZMCEMB_30.readFeatures(json_K2_LJZMCEMB_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K2_LJZMCEMB_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K2_LJZMCEMB_30.addFeatures(features_K2_LJZMCEMB_30);
var lyr_K2_LJZMCEMB_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K2_LJZMCEMB_30, 
                style: style_K2_LJZMCEMB_30,
                interactive: false,
                title: '<img src="styles/legend/K2_LJZMCEMB_30.png" /> K2_LJ-ZM-CE-MB'
            });
var format_K2_ZMDO_31 = new ol.format.GeoJSON();
var features_K2_ZMDO_31 = format_K2_ZMDO_31.readFeatures(json_K2_ZMDO_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K2_ZMDO_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K2_ZMDO_31.addFeatures(features_K2_ZMDO_31);
var lyr_K2_ZMDO_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K2_ZMDO_31, 
                style: style_K2_ZMDO_31,
                interactive: false,
                title: '<img src="styles/legend/K2_ZMDO_31.png" /> K2_ZM-DO'
            });
var format_K2_LJDI_32 = new ol.format.GeoJSON();
var features_K2_LJDI_32 = format_K2_LJDI_32.readFeatures(json_K2_LJDI_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K2_LJDI_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K2_LJDI_32.addFeatures(features_K2_LJDI_32);
var lyr_K2_LJDI_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K2_LJDI_32, 
                style: style_K2_LJDI_32,
                interactive: false,
                title: '<img src="styles/legend/K2_LJDI_32.png" /> K2_LJ-DI'
            });
var format_LV_V4_33 = new ol.format.GeoJSON();
var features_LV_V4_33 = format_LV_V4_33.readFeatures(json_LV_V4_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LV_V4_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LV_V4_33.addFeatures(features_LV_V4_33);
var lyr_LV_V4_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LV_V4_33, 
                style: style_LV_V4_33,
                interactive: false,
                title: '<img src="styles/legend/LV_V4_33.png" /> LŽV_V4'
            });
var format_Novepostaje_34 = new ol.format.GeoJSON();
var features_Novepostaje_34 = format_Novepostaje_34.readFeatures(json_Novepostaje_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Novepostaje_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Novepostaje_34.addFeatures(features_Novepostaje_34);
var lyr_Novepostaje_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Novepostaje_34, 
                style: style_Novepostaje_34,
                interactive: true,
                title: '<img src="styles/legend/Novepostaje_34.png" /> Nove postaje'
            });
var group_K2 = new ol.layer.Group({
                                layers: [lyr_K2_LJZMCEMB_30,lyr_K2_ZMDO_31,lyr_K2_LJDI_32,],
                                title: "K2"});
var group_K3 = new ol.layer.Group({
                                layers: [lyr_K3LJJES_23,lyr_K3_LJZMSuhadol_24,lyr_K3_MBMS_25,lyr_K3_ZMSuhadolCE_26,lyr_K3_CEMB_27,lyr_K3_LJDI_28,lyr_K3_DIIT_29,],
                                title: "K3"});
var group_RegioLURR2 = new ol.layer.Group({
                                layers: [lyr_Dolenjskaproga_18,lyr_DomaleKranjZlatoPolje_19,lyr_MosteDomale_20,lyr_Zahodnaobvoznaproga_21,lyr_Kamnikaproga_22,],
                                title: "Regio-LUR R2"});
var group_Obstojeeomreje = new ol.layer.Group({
                                layers: [lyr_CesteACinHC_14,lyr_Obstojeeproge_15,lyr_Obstojeepostaje_16,lyr_DivaaKoper2tir_17,],
                                title: "Obstoječe omrežje"});
var group_Okoljeinprostor = new ol.layer.Group({
                                layers: [lyr_Kulturna_dediscina_10,lyr_Natura_2000_11,lyr_VVO_dravni_nivo_12,lyr_VVO_obcinski_nivo_13,],
                                title: "Okolje in prostor"});
var group_Zalednikoridorjihitrihprog = new ol.layer.Group({
                                layers: [lyr_IT_5,lyr_AT_6,lyr_HU_7,lyr_HR_8,lyr_Slovenija_9,],
                                title: "Zaledni koridorji hitrih prog"});
var group_Podloge = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Esritopo_1,lyr_Esrisatelit_2,lyr_Carto_light_nolabels_3,lyr_Drave_4,],
                                title: "Podloge"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Esritopo_1.setVisible(true);lyr_Esrisatelit_2.setVisible(true);lyr_Carto_light_nolabels_3.setVisible(true);lyr_Drave_4.setVisible(true);lyr_IT_5.setVisible(true);lyr_AT_6.setVisible(true);lyr_HU_7.setVisible(true);lyr_HR_8.setVisible(true);lyr_Slovenija_9.setVisible(true);lyr_Kulturna_dediscina_10.setVisible(true);lyr_Natura_2000_11.setVisible(true);lyr_VVO_dravni_nivo_12.setVisible(true);lyr_VVO_obcinski_nivo_13.setVisible(true);lyr_CesteACinHC_14.setVisible(true);lyr_Obstojeeproge_15.setVisible(true);lyr_Obstojeepostaje_16.setVisible(true);lyr_DivaaKoper2tir_17.setVisible(true);lyr_Dolenjskaproga_18.setVisible(true);lyr_DomaleKranjZlatoPolje_19.setVisible(true);lyr_MosteDomale_20.setVisible(true);lyr_Zahodnaobvoznaproga_21.setVisible(true);lyr_Kamnikaproga_22.setVisible(true);lyr_K3LJJES_23.setVisible(true);lyr_K3_LJZMSuhadol_24.setVisible(true);lyr_K3_MBMS_25.setVisible(true);lyr_K3_ZMSuhadolCE_26.setVisible(true);lyr_K3_CEMB_27.setVisible(true);lyr_K3_LJDI_28.setVisible(true);lyr_K3_DIIT_29.setVisible(true);lyr_K2_LJZMCEMB_30.setVisible(true);lyr_K2_ZMDO_31.setVisible(true);lyr_K2_LJDI_32.setVisible(true);lyr_LV_V4_33.setVisible(true);lyr_Novepostaje_34.setVisible(true);
var layersList = [group_Podloge,group_Zalednikoridorjihitrihprog,group_Okoljeinprostor,group_Obstojeeomreje,group_RegioLURR2,group_K3,group_K2,lyr_LV_V4_33,lyr_Novepostaje_34];
lyr_Drave_4.set('fieldAliases', {'FID_3': 'FID_3', 'NUTS_3': 'NUTS_3', 'NAME_NUTS3': 'NAME_NUTS3', 'FID_2': 'FID_2', 'NUTS_2': 'NUTS_2', 'NAME_NUTS2': 'NAME_NUTS2', 'FID_1': 'FID_1', 'NUTS_1': 'NUTS_1', 'NAME_NUTS1': 'NAME_NUTS1', 'FID_0': 'FID_0', 'NUTS_0': 'NUTS_0', 'NAME_NUTS0': 'NAME_NUTS0', 'orig_pov': 'orig_pov', });
lyr_Slovenija_9.set('fieldAliases', {'UE_MID': 'UE_MID', 'UE_ID': 'UE_ID', 'UE_IME': 'UE_IME', 'D_OD': 'D_OD', 'POVRSINA': 'POVRSINA', 'Y_C': 'Y_C', 'X_C': 'X_C', 'UE_STDM': 'UE_STDM', });
lyr_Kulturna_dediscina_10.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_Natura_2000_11.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', });
lyr_VVO_dravni_nivo_12.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_VVO_obcinski_nivo_13.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_CesteACinHC_14.set('fieldAliases', {'NO': 'NO', 'R_NO': 'R_NO', });
lyr_Obstojeeproge_15.set('fieldAliases', {'qc_id': 'qc_id', 'sž_ime_p~': 'sž_ime_p~', 'sž_kateg~': 'sž_kateg~', 'sž_števi': 'sž_števi', });
lyr_Obstojeepostaje_16.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'name': 'name', });
lyr_DivaaKoper2tir_17.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_Dolenjskaproga_18.set('fieldAliases', {'id': 'id', });
lyr_DomaleKranjZlatoPolje_19.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_MosteDomale_20.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_Zahodnaobvoznaproga_21.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_Kamnikaproga_22.set('fieldAliases', {'id': 'id', });
lyr_K3LJJES_23.set('fieldAliases', {'NO': 'NO', });
lyr_K3_LJZMSuhadol_24.set('fieldAliases', {'length': 'length', });
lyr_K3_MBMS_25.set('fieldAliases', {'LENGTH': 'LENGTH', });
lyr_K3_ZMSuhadolCE_26.set('fieldAliases', {'length': 'length', });
lyr_K3_CEMB_27.set('fieldAliases', {'length': 'length', });
lyr_K3_LJDI_28.set('fieldAliases', {'length': 'length', });
lyr_K3_DIIT_29.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_K2_LJZMCEMB_30.set('fieldAliases', {'Length': 'Length', });
lyr_K2_ZMDO_31.set('fieldAliases', {'length': 'length', });
lyr_K2_LJDI_32.set('fieldAliases', {'Length': 'Length', });
lyr_LV_V4_33.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Novepostaje_34.set('fieldAliases', {'fid': 'fid', 'Ime': 'Ime', 'Potencial': 'Potencial', });
lyr_Drave_4.set('fieldImages', {'FID_3': 'Range', 'NUTS_3': 'TextEdit', 'NAME_NUTS3': 'TextEdit', 'FID_2': 'Range', 'NUTS_2': 'TextEdit', 'NAME_NUTS2': 'TextEdit', 'FID_1': 'Range', 'NUTS_1': 'TextEdit', 'NAME_NUTS1': 'TextEdit', 'FID_0': 'TextEdit', 'NUTS_0': 'TextEdit', 'NAME_NUTS0': 'TextEdit', 'orig_pov': 'TextEdit', });
lyr_Slovenija_9.set('fieldImages', {'UE_MID': '', 'UE_ID': '', 'UE_IME': '', 'D_OD': '', 'POVRSINA': '', 'Y_C': '', 'X_C': '', 'UE_STDM': '', });
lyr_Kulturna_dediscina_10.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_Natura_2000_11.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', });
lyr_VVO_dravni_nivo_12.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_VVO_obcinski_nivo_13.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_CesteACinHC_14.set('fieldImages', {'NO': 'TextEdit', 'R_NO': 'TextEdit', });
lyr_Obstojeeproge_15.set('fieldImages', {'qc_id': 'TextEdit', 'sž_ime_p~': 'TextEdit', 'sž_kateg~': 'TextEdit', 'sž_števi': 'TextEdit', });
lyr_Obstojeepostaje_16.set('fieldImages', {'qc_id': 'TextEdit', 'no': 'TextEdit', 'name': 'TextEdit', });
lyr_DivaaKoper2tir_17.set('fieldImages', {'Tipodseka': 'TextEdit', 'Length': 'TextEdit', });
lyr_Dolenjskaproga_18.set('fieldImages', {'id': 'TextEdit', });
lyr_DomaleKranjZlatoPolje_19.set('fieldImages', {'qc_id': '', });
lyr_MosteDomale_20.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_Zahodnaobvoznaproga_21.set('fieldImages', {'qc_id': '', });
lyr_Kamnikaproga_22.set('fieldImages', {'id': 'TextEdit', });
lyr_K3LJJES_23.set('fieldImages', {'NO': 'Range', });
lyr_K3_LJZMSuhadol_24.set('fieldImages', {'length': 'TextEdit', });
lyr_K3_MBMS_25.set('fieldImages', {'LENGTH': '', });
lyr_K3_ZMSuhadolCE_26.set('fieldImages', {'length': 'TextEdit', });
lyr_K3_CEMB_27.set('fieldImages', {'length': 'TextEdit', });
lyr_K3_LJDI_28.set('fieldImages', {'length': 'TextEdit', });
lyr_K3_DIIT_29.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_K2_LJZMCEMB_30.set('fieldImages', {'Length': '', });
lyr_K2_ZMDO_31.set('fieldImages', {'length': 'TextEdit', });
lyr_K2_LJDI_32.set('fieldImages', {'Length': '', });
lyr_LV_V4_33.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_Novepostaje_34.set('fieldImages', {'fid': 'TextEdit', 'Ime': 'TextEdit', 'Potencial': 'Range', });
lyr_Drave_4.set('fieldLabels', {});
lyr_Slovenija_9.set('fieldLabels', {});
lyr_Kulturna_dediscina_10.set('fieldLabels', {});
lyr_Natura_2000_11.set('fieldLabels', {});
lyr_VVO_dravni_nivo_12.set('fieldLabels', {});
lyr_VVO_obcinski_nivo_13.set('fieldLabels', {});
lyr_CesteACinHC_14.set('fieldLabels', {});
lyr_Obstojeeproge_15.set('fieldLabels', {});
lyr_Obstojeepostaje_16.set('fieldLabels', {});
lyr_DivaaKoper2tir_17.set('fieldLabels', {});
lyr_Dolenjskaproga_18.set('fieldLabels', {});
lyr_DomaleKranjZlatoPolje_19.set('fieldLabels', {});
lyr_MosteDomale_20.set('fieldLabels', {});
lyr_Zahodnaobvoznaproga_21.set('fieldLabels', {});
lyr_Kamnikaproga_22.set('fieldLabels', {});
lyr_K3LJJES_23.set('fieldLabels', {});
lyr_K3_LJZMSuhadol_24.set('fieldLabels', {});
lyr_K3_MBMS_25.set('fieldLabels', {});
lyr_K3_ZMSuhadolCE_26.set('fieldLabels', {});
lyr_K3_CEMB_27.set('fieldLabels', {});
lyr_K3_LJDI_28.set('fieldLabels', {});
lyr_K3_DIIT_29.set('fieldLabels', {});
lyr_K2_LJZMCEMB_30.set('fieldLabels', {});
lyr_K2_ZMDO_31.set('fieldLabels', {});
lyr_K2_LJDI_32.set('fieldLabels', {});
lyr_LV_V4_33.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_Novepostaje_34.set('fieldLabels', {'fid': 'no label', 'Ime': 'no label', 'Potencial': 'no label', });
lyr_Novepostaje_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});