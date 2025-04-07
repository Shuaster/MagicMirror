/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
        address: "0.0.0.0",     // Address to listen on, can be:
                                                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                                                        // - another specific IPv4/6 to listen on a specific interface
                                                        // - "0.0.0.0", "::" to listen on any interface
                                                        // Default, when address config is left out or empty, is "localhost"
        port: 8080,
        basePath: "/",  // The URL path where MagicMirror   is hosted. If you are using a Reverse proxy
                                                                        // you must set the sub path here. basePath must end with a /
        ipWhitelist: [],        // Set [] to allow all IP addresses
                                                                        // or add a specific IPv4 of 192.168.1.5 :
                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                                        // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        useHttps: false,                        // Support HTTPS or not, default "false" will use HTTP
        httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
        httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

        language: "en",
        locale: "en-US",   // this variable is provided as a consistent location
                           // it is currently only used by 3rd party modules. no MagicMirror code uses this value
                           // as we have no usage, we  have no constraints on what this field holds
                           // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

        logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
        timeFormat: 12,
        units: "metric",

        modules: [
                {
                        module: "alert",
                },
                {
                        module: "updatenotification",
                        position: "top_bar"
                },
                {
                        module: "clock",
                        position: "top_bar",
                        config: {
                                timeFormat: 12,
                                displaySeconds: false,
                                showPeriod: false,

                                dateFormat: "dddd",
                        }
                },
                {
                        module: "weather",
                        position: "top_right",
                        config: {
                                weatherProvider: "openmeteo",
                                type: "current",

                                roundTemp: true,
                                showPeriod: false,
                                
                                showPrecipitationProbability: true,
                                showWindDirection: false,
                                showSun: false,

                                lat: 43.595310,
                                lon: -79.640579
                        }
                },
                {
                        module: "weather",
                        position: "top_right",
                        config: {
                                weatherProvider: "openmeteo",
                                type: "forecast",

                                roundTemp: true,
                                showPeriod: false,
                                colored: true,
                                fade: false,

                                showPrecipitationProbability: true,

                                lat: 43.595310,
                                lon: -79.640579
                        }
                },
                {
                        module: "calendar",
                        position: "top_left",
                        header: "Today's Schedule",
                        config: {
                                limitDays: 1,
                                wrapEvents: true,
                                wrapLocationEvents: true,
                                broadcastPastEvents: true, // <= IMPORTANT to see past events

                                fade: false,
                                coloredBackground: true,
                                calendars: [
                                        {
                                            url: "https://calendar.google.com/calendar/ical/joshuaromanick%40gmail.com/private-87c273eec7bb8894be03e0b7aaad6013/basic.ics",
                                            name: "Joshua Romanick",
                                            color: "#669bbc",
                                            bgColor: "#669bbc"
                                        },
                                        {
                                            url: "https://calendar.google.com/calendar/ical/d2db08cf6dfdb5a2506ec5b7ede1af250ee4294acbecb12d6dc42c1cf660640b%40group.calendar.google.com/private-be54bb3a170daff8880949d938d1a848/basic.ics",
                                            name: "Routine",
                                            color: "#003049",
                                            bgColor: "#003049"
                                        },
                                        {
                                            url: "https://calendar.google.com/calendar/ical/f36b02f2576741a6411fef6917bec41136333a641844f7baa98161d932900cbe%40group.calendar.google.com/private-2094b197f462124e5d46f8e6a132f297/basic.ics",
                                            name: "Work",
                                            color: "#C1121F",
                                            bgColor: "#C1121F"
                                        },
                                        {
                                            url: "https://files-f1.motorsportcalendars.com/f1-calendar_p1_p2_p3_qualifying_sprint_gp.ics?t=1677718477283",
                                            name: "F1_Calendar",
                                            color: "#FDF0D5",
                                            bgColor: "#FDF0D5"
                                        },
                                ]
                        }
                },
                {
                        module: "MMM-CalendarExt3",
                        position: "bottom_bar",
                        title: "",
                        config: {
                                mode: "week",
                                instanceId: "weeklyCalendar",
                                weekIndex: "0",
                                weeksInView: "2",
                                maxEventLines: 5,
                                firstDayOfWeek: 1,
                                displayEndTime: "true",
                                useWeather: "false",
                        }
                },
        ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
