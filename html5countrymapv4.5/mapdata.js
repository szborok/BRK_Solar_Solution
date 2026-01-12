var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "yes",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "yes",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0,
    popup_shadow: 0,
    popup_corners: 0,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "yes",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: "RED",
    border_hover_size: ""
  },
  state_specific: {
    HUBA: {
      name: "Baranya",
      description: " "
    },
    HUBC: {
      name: "Békéscsaba",
      description: " "
    },
    HUBE: {
      name: "Békés",
      description: " "
    },
    HUBK: {
      name: "Bács-Kiskun",
      description: " "
    },
    HUBU: {
      name: "Budapest",
      description: " "
    },
    HUBZ: {
      name: "Borsod-Abaúj-Zemplén",
      description: " "
    },
    HUCS: {
      name: "Csongrád",
      description: " "
    },
    HUDE: {
      name: "Debrecen",
      description: " "
    },
    HUDU: {
      name: "Dunaújváros",
      description: " "
    },
    HUEG: {
      name: "Eger",
      description: " "
    },
    HUER: {
      name: "Érd",
      description: " "
    },
    HUFE: {
      name: "Fejér",
      description: " "
    },
    HUGS: {
      name: "Gyor-Moson-Sopron",
      description: " "
    },
    HUGY: {
      name: "Gyôr",
      description: " "
    },
    HUHB: {
      name: "Hajdú-Bihar",
      description: " "
    },
    HUHE: {
      name: "Heves",
      description: " "
    },
    HUHV: {
      name: "Hódmezôvásárhely",
      description: " "
    },
    HUJN: {
      name: "Jász-Nagykun-Szolnok",
      description: " "
    },
    HUKE: {
      name: "Komárom-Esztergom",
      description: " "
    },
    HUKM: {
      name: "Kecskemét",
      description: " "
    },
    HUKV: {
      name: "Kaposvár",
      description: " "
    },
    HUMI: {
      name: "Miskolc",
      description: " "
    },
    HUNK: {
      name: "Nagykanizsa",
      description: " "
    },
    HUNO: {
      name: "Nógrád",
      description: " "
    },
    HUNY: {
      name: "Nyíregyháza",
      description: " "
    },
    HUPE: {
      name: "Pest",
      description: " "
    },
    HUPS: {
      name: "Pécs",
      description: " "
    },
    HUSD: {
      name: "Szeged",
      description: " "
    },
    HUSF: {
      name: "Székesfehérvár",
      description: " "
    },
    HUSH: {
      name: "Szombathely",
      description: " "
    },
    HUSK: {
      name: "Szolnok",
      description: " "
    },
    HUSN: {
      name: "Sopron",
      description: " "
    },
    HUSO: {
      name: "Somogy",
      description: " "
    },
    HUSS: {
      name: "Szekszárd",
      description: " "
    },
    HUST: {
      name: "Salgótarján",
      description: " "
    },
    HUSZ: {
      name: "Szabolcs-Szatmár-Bereg",
      description: " "
    },
    HUTB: {
      name: "Tatabánya",
      description: " "
    },
    HUTO: {
      name: "Tolna",
      description: " "
    },
    HUVA: {
      name: "Vas",
      description: " "
    },
    HUVE: {
      name: "Veszprém",
      description: " "
    },
    HUVM: {
      name: "Veszprém",
      description: " "
    },
    HUZA: {
      name: "Zala",
      description: " "
    },
    HUZE: {
      name: "Zalaegerszeg",
      description: " "
    }
  },
  locations: {},
  labels: {
    HUBA: {
      name: "Baranya",
      parent_id: "HUBA"
    },
    HUBC: {
      name: "Békéscsaba",
      parent_id: "HUBC"
    },
    HUBE: {
      name: "Békés",
      parent_id: "HUBE"
    },
    HUBK: {
      name: "Bács-Kiskun",
      parent_id: "HUBK"
    },
    HUBU: {
      name: "Budapest",
      parent_id: "HUBU"
    },
    HUBZ: {
      name: "Borsod-Abaúj-Zemplén",
      parent_id: "HUBZ"
    },
    HUCS: {
      name: "Csongrád",
      parent_id: "HUCS"
    },
    HUDE: {
      name: "Debrecen",
      parent_id: "HUDE"
    },
    HUDU: {
      name: "Dunaújváros",
      parent_id: "HUDU"
    },
    HUEG: {
      name: "Eger",
      parent_id: "HUEG"
    },
    HUER: {
      name: "Érd",
      parent_id: "HUER"
    },
    HUFE: {
      name: "Fejér",
      parent_id: "HUFE"
    },
    HUGS: {
      name: "Gyor-Moson-Sopron",
      parent_id: "HUGS"
    },
    HUGY: {
      name: "Gyôr",
      parent_id: "HUGY"
    },
    HUHB: {
      name: "Hajdú-Bihar",
      parent_id: "HUHB"
    },
    HUHE: {
      name: "Heves",
      parent_id: "HUHE"
    },
    HUHV: {
      name: "Hódmezôvásárhely",
      parent_id: "HUHV"
    },
    HUJN: {
      name: "Jász-Nagykun-Szolnok",
      parent_id: "HUJN"
    },
    HUKE: {
      name: "Komárom-Esztergom",
      parent_id: "HUKE"
    },
    HUKM: {
      name: "Kecskemét",
      parent_id: "HUKM"
    },
    HUKV: {
      name: "Kaposvár",
      parent_id: "HUKV"
    },
    HUMI: {
      name: "Miskolc",
      parent_id: "HUMI"
    },
    HUNK: {
      name: "Nagykanizsa",
      parent_id: "HUNK"
    },
    HUNO: {
      name: "Nógrád",
      parent_id: "HUNO"
    },
    HUNY: {
      name: "Nyíregyháza",
      parent_id: "HUNY"
    },
    HUPE: {
      name: "Pest",
      parent_id: "HUPE"
    },
    HUPS: {
      name: "Pécs",
      parent_id: "HUPS"
    },
    HUSD: {
      name: "Szeged",
      parent_id: "HUSD"
    },
    HUSF: {
      name: "Székesfehérvár",
      parent_id: "HUSF"
    },
    HUSH: {
      name: "Szombathely",
      parent_id: "HUSH"
    },
    HUSK: {
      name: "Szolnok",
      parent_id: "HUSK"
    },
    HUSN: {
      name: "Sopron",
      parent_id: "HUSN"
    },
    HUSO: {
      name: "Somogy",
      parent_id: "HUSO"
    },
    HUSS: {
      name: "Szekszárd",
      parent_id: "HUSS"
    },
    HUST: {
      name: "Salgótarján",
      parent_id: "HUST"
    },
    HUSZ: {
      name: "Szabolcs-Szatmár-Bereg",
      parent_id: "HUSZ"
    },
    HUTB: {
      name: "Tatabánya",
      parent_id: "HUTB"
    },
    HUTO: {
      name: "Tolna",
      parent_id: "HUTO"
    },
    HUVA: {
      name: "Vas",
      parent_id: "HUVA"
    },
    HUVE: {
      name: "Veszprém",
      parent_id: "HUVE"
    },
    HUVM: {
      name: "Veszprém",
      parent_id: "HUVM"
    },
    HUZA: {
      name: "Zala",
      parent_id: "HUZA"
    },
    HUZE: {
      name: "Zalaegerszeg",
      parent_id: "HUZE"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};