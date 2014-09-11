/*global dojo */
/** @license
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.Config");
dojo.declare("js.Config", null, {

 
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application title                  - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set path for application favicon           - [ Tag(s) to look for: ApplicationFavicon ]
    // 4.  Set path for application theme             - [ Tag(s) to look for: ApplicationTheme ]

    // 5.  Set splash screen message                  - [ Tag(s) to look for: SplashScreen ]
    // 6.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]

    // 7.  Specify URLs for basemaps                  - [ Tag(s) to look for: BaseMapLayers ]
    // 8.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]

    // 9.  Tags for using map services:
    // 9a. Specify URLs and attributes for operational layers
    //                                                - [ Tag(s) to look for: FacilityLayer, PrimaryKeyForFeatures, CommentsLayer, ForeignKeyforComments, FeatureName, ReferenceOverlayLayer ]
    // 9b. Customize info-Window settings             - [ Tag(s) to look for: InfoWindowHeader, InfoWindowContent ]
    // 9c. Customize info-Popup settings              - [ Tag(s) to look for: InfoPopupFieldsCollection, Activities ]
    // 9d. Customize info-Popup size                  - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 9e. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs, FormatDateAs ]

    // 10. Customize buffer settings                  - [ Tag(s) to look for: BufferDistance ]
    // 11. Customize directions settings              - [ Tag(s) to look for: GetDirectionsMobile, GetDirectionsDesktop, GetDirections, ApproximateValue ]

    // 12a. Customize address search settings         - [ Tag(s) to look for: DefaultLocatorSymbol, MarkupSymbolSize, Locators, LocatorDefaultAddress, LocatorParameters, LocatorURL, CandidateFields,
    //                                                                        DisplayField, AddressMatchScore, LocatorFieldName, LocatorFieldValues, CountyFields, MaxResults ]
    // 12b. Customize facility search settings        - [ Tag(s) to look for: DisplayText, LocatorDefaultFeature ]
    // 12c. Customize activity search settings        - [ Tag(s) to look for: DisplayText ]

    // 13. Customize ripple size settings             - [ Tag(s) to look for: LocatorRippleSize ]
    // 14. Customize zoom level settings              - [ Tag(s) to look for: ZoomLevel ]
    // 15. Customize database fields settings         - [ Tag(s) to look for: DatabaseFields ]
    // 16. Customize Comments infoPopup settings      - [ Tag(s) to look for: CommentsInfoPopupFieldsCollection ]
    // 17. Customize text for GeoLocation             - [ Tag(s) to look for: TextForGeoLocation ]
    // 18. Set URL for geometry service               - [ Tag(s) to look for: GeometryService ]

    // 19. Customize routing settings for directions  - [ Tag(s) to look for: RouteServiceURL, RouteColor, RouteWidth ]

    // 20. Configure data to be displayed on the bottom panel
    //                                                - [ Tag(s) to look for: InfoBoxWidth, Order]

    // 21. Specify URLs for map sharing               - [ Tag(s) to look for: MapSharingOptions, TinyURLServiceURL, TinyURLResponseAttribute, FacebookShareURL, TwitterShareURL, ShareByMailLink ]


    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Water Access Locator",

    // Set application icon path
    ApplicationIcon: "images/i_hydro.png",

    // Set application Favicon path
    ApplicationFavicon: "images/i_hydro.ico",

    // Set application theme
    ApplicationTheme: "styles/blueTheme.css",

    // Set splash window content - Message that appears when the application starts
    SplashScreen: {
           Message: "<center>Welcome to the <b> Water Access Locator</b></center><hr><br> The <b> Water Access Locator</b> helps you locate a boat ramp, marina, or fishing site within the state.<br><br> To locate a site, simply enter an address, name, select activities, or use your current location. The water access sites  will then be highlighted on the map and relevant information about each site will be presented to the user.",
        isVisible: true
    },

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All base-maps need to use the same spatial reference. By default, on application start the first base-map will be loaded
    BaseMapLayers: [{
        Key: "natMap",
        ThumbnailSource: "images/nationalgeo.png",
        Name: "National Topographic Map",
        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer"
    }, {
        Key: "streets",
        ThumbnailSource: "images/streets.png",
        Name: "Street Map",
        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
    }],

    // Initial map extent. Use comma (,) to separate values and don't delete the last comma
    DefaultExtent: "-9991781.18961914, 4083344.0852194074, -9160146.321876464, 4494881.045506775",

    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Configure operational layers:
    //URL used for doing query task on the feature layer
    FacilityLayer: "http://arcgis-gov-1244222493.us-west-2.elb.amazonaws.com/arcgis/rest/services/WaterAccess/FeatureServer/0",
    //Set the primary key attribute for features
    PrimaryKeyForFeatures: "${SITEID}",


    CommentsLayer: {
        //Set to true if comments need to be displayed , or false if not required
        Visibility: true,
        //URL used for doing query task on the comments layer
        URL: "http://arcgis-gov-1244222493.us-west-2.elb.amazonaws.com/arcgis/rest/services/WaterAccess/FeatureServer/1"
    },
    //Set the foreign key attribute for comments
    ForeignKeyforComments: "${id}",

    //Set the name attribute for features
    FeatureName: "${NAME}",

    // ServiceUrl is the REST end point for the reference overlay layer
    // DisplayOnLoad setting is used to show or hide the reference overlay layer. Reference overlay will be shown when it is set to true

    ReferenceOverlayLayer: {
        ServiceUrl: "",
        DisplayOnLoad: false
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-WINDOW SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-window is a small, two line popup that gets displayed on selecting a feature
    // Set Info-window title. Configure this with text/fields
    InfoWindowHeader: [{
        FieldName: "${NAME}",
        Alias: "Facility Name",
        InfoWindowHeaderText: "Facility Info"
    }],

    // Set content/fields for the callout window in Smartphone's
    InfoWindowContent: [{
        FieldName: "${COUNTY}",
        Alias: "County"
    }],

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-POPUP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-popup is a popup dialog that gets displayed on selecting a feature
    // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
    InfoPopupFieldsCollection: [{
        DisplayText: "County:",
        FieldName: "${COUNTY}"
    }, {
        DisplayText: "Hours Open For:",
        FieldName: "${OPERHOURS}"
    }, {
        DisplayText: "Access Fee:",
        FieldName: "${ACCESSFEE}"
    }, {
        DisplayText: "Ramp Type:",
        FieldName: "${RAMPTYPE}"
    }],

    //Activities to be displayed in info window for a feature
    Activities: [{
        FieldName: "${FOURWHEEL}",
        Alias: "Four Wheel",
        Image: "images/all_terrain_trail.png",
        isSelected: true
    }, {
        FieldName: "${ADACOMPLY}",
        Alias: "Handicap Parking Available",
        Image: "images/HandicapParking.png"
    }, {
        FieldName: "${PARKLIGHTS}",
        Alias: "Lighted Park",
        Image: "images/lightedpark.png"
    }, {
        FieldName: "${ACCESSFEE}",
        Alias: "Access Fee",
        Image: "images/atm.png"
    }, {
        FieldName: "${WTRHOOKUP}",
        Alias: "Water Hookup",
        Image: "images/waterhookup.png"
    }, {
        FieldName: "${ELEHOOKUP}",
        Alias: "Electric Hookup",
        Image: "images/electrichookup.png"
    }, {
        FieldName: "${RESTROOM}",
        Alias: "Restrooms Available",
        Image: "images/restrooms.png"
    }, {
        FieldName: "${FISHPIER}",
        Alias: "Fishing Pier",
        Image: "images/fishingpier.png"
    }, {
        FieldName: "${CANOELAND}",
        Alias: "Canoe Landing",
        Image: "images/canoelanding.png"
    }, {
        FieldName: "${WINTERPOOL}",
        Alias: "Winter Pool",
        Image: "images/winterpool.png"
    }, {
        FieldName: "${COURTDOCK}",
        Alias: "Courtesy Dock",
        Image: "images/courtesydock.png"
    }, {
        FieldName: "${BOATRENT}",
        Alias: "Rental Available",
        Image: "images/boat_tour.png"
    }, {
        FieldName: "${BOATRAMP}",
        Alias: "Boat Ramp",
        Image: "images/boat_launch.png"
    }, {
        FieldName: "${MARINA}",
        Alias: "Marina",
        Image: "images/marina.png"
    }, {
        FieldName: "${TRAILPARK}",
        Alias: "Trailer Parking",
        Image: "images/boat_launch.png"
    }, {
        FieldName: "${FISHING}",
        Alias: "Fishing",
        Image: "images/fishing.png"
    }],

    // Set size of the info-Popup - select maximum height and width in pixels (not applicable for tabbed info-Popup)
    InfoPopupHeight: 270,
    InfoPopupWidth: 330,

    // Set string value to be shown for null or blank values
    ShowNullValueAs: "N/A",

    // Set date format
    FormatDateAs: "MMM dd, yyyy",

    //set distance in miles for drawing the buffer
    BufferDistance: "2",

    //Set this variable to true/false to enable/disable directions
    //if this master variable is set to false directions cannot be enabled for any of the devices
    GetDirections: true,

    //Set this variable to true/false to enable/disable directions for Mobile/tablet
    GetDirectionsMobile: true,

    //Set this variable to true/false to enable/disable directions for desktop
    GetDirectionsDesktop: true,

    //Set this value to display text besides calculated distances in search results
    ApproximateValue: "approx",

    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set locator settings such as locator symbol, size, display fields, match score

    //DefaultLocatorSymbol:Set the image path for locator symbol. e.g. pushpin.
    //MarkupSymbolSize:Set the image dimensions in pixels for locator symbol.
    //DisplayText: Set the title for type of search e.g. 'Location', 'Name', 'Activity'
    //LocatorDefaultAddress: Set the default address to search.
    //LocatorDefaultFeature: Set the default facility to search.
    //LocatorParameters: Required parameters to search the address candidates.
    //                SearchField: The name of geocode service input field that accepts the search address. e.g. 'SingleLine' or 'Address'.
    //                SearchBoundaryField: The name of geocode service input field that accepts an extent to search an input address within. e.g."searchExtent"
    //LocatorURL: Specify URL for geocode service.
    //LocatorOutFields: The list of outfields to be included in the result set provided by geocode service.
    //DisplayField: Specify the outfield of geocode service. The value in this field will be displayed for search results in the application.
    //AddressMatchScore: Required parameters to specify the accuracy of address match.
    //                Field: Set the outfield of geocode service that contains the Address Match Score.
    //                Value: Set the minimum score value for filtering the candidate results. The value should be a number between 0-100.
    //AddressSearch: Candidates based on which the address search will be performed.
    //                FilterFieldName: Set the outfield that contains the match level for geocode request. e.g. For World GeoCode, the field that contains the match level is 'Addr_type'.
    //                FilterFieldValues: Specify the desired match levels to filter address search results. e.g. 'StreetAddress', 'StreetName' etc.
    //PlaceNameSearch: Attributes based on which the layers will be queried when a location search is performed.
    //                LocatorFieldValue: Set the match level for county/place search. e.g. 'POI' will contain all administrative boundary
    //                FilterFieldName: Set the feature type for results returned by the geocode request. e.g. For World GeoCode, the field that contains the feature type is 'Type'.
    //                FilterFieldValues: Specify the feature types to filter search results. e.g. 'county', 'city' etc.
    //                Enabled: Sets whether the PlaceNameSearch results should be displayed or not.
    LocatorSettings: {
        DefaultLocatorSymbol: "images/RedPushpin.png",
        MarkupSymbolSize: {
            width: 35,
            height: 35
        },
        Locators: [{
            DisplayText: "Location",
            LocatorDefaultAddress: "Lake Echo Rd Tracy City TN 37387",
            LocatorParameters: {
                SearchField: "SingleLine",
                SearchBoundaryField: "searchExtent"
            },
            LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            LocatorOutFields: ["Addr_Type", "Type", "Score", "Match_Addr", "xmin", "xmax", "ymin", "ymax"],
            DisplayField: "${Match_Addr}",
            AddressMatchScore: {
                Field: "Score",
                Value: 80
            },
            AddressSearch: {
                FilterFieldName: 'Addr_Type',
                FilterFieldValues: ["StreetAddress", "StreetName", "PointAddress", "POI"]
            },
            PlaceNameSearch: {
                LocatorFieldValue: "POI",
                FilterFieldName: "Type",
                FilterFieldValues: ["county", "city", "park","lake", "mountain", "state or province", "state capital"],
                Enabled: true
            }
        }, {
            DisplayText: "Name",
            LocatorDefaultFeature: "Shelby Park"
        }, {
            DisplayText: "Activity"
        }]
    },

    //Set the locator ripple size(in pixels)
    LocatorRippleSize: 40,

    //Set the Zoom Level
    ZoomLevel: 15,
    // Define the database field names
    // Note: DateFieldName refers to a date database field.
    // All other attributes refer to text database fields.
    DatabaseFields: {
        FeatureIdFieldName: "id",
        CommentsFieldName: "COMMENTS",
        DateFieldName: "SUBMITDT",
        RankFieldName: "RANK"
    },

    // Set info-pop fields for adding and displaying comment
    CommentsInfoPopupFieldsCollection: {
        Rank: "${RANK}",
        SubmitDate: "${SUBMITDT}",
        Comments: "${COMMENTS}"
    },

    // Set default text for geolocation
    TextForGeoLocation: "My Location",

    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set geometry service URL
    GeometryService: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",

    // ------------------------------------------------------------------------------------------------------------------------
    // DRIVING DIRECTIONS SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for routing service
    RouteServiceURL: "http://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",

    // Set color for the route symbol
    RouteColor: "#7F7FFE",

    // Set width(in pixels) of the route
    RouteWidth: 6,

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR INFO-PODS ON THE BOTTOM PANEL
    // ------------------------------------------------------------------------------------------------------------------------
    // Set width(in pixels) of the pods in the bottom panel
    InfoBoxWidth: 422,

    // Set sequence for info pods in the bottom panel
    Order: ["search", "facility", "directions", "photogallery", "comments"],

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------

    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions: {
        TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=esri&apiKey=R_65fd9891cd882e2a96b99d4bda1be00e&uri=${0}&format=json",
        TinyURLResponseAttribute: "data.url",
        FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Configurable%20Place%20Finder",
        TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=Configurable%20Place%20Finder ${0}",
        ShareByMailLink: "mailto:%20?subject=Check%20out%20this%20map!&body=${0}"
    }
});