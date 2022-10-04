// Type definitions for instabug-reactnative 8.0
// Project: https://github.com/Instabug/instabug-reactnative#readme
// Definitions by: Aly Ezz <https://github.com/alyezz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace BugReporting {
  /**
   * Enables and disables manual invocation and prompt options for bug and feedback.
   * @param {boolean} isEnabled
   */
  function setEnabled(isEnabled: boolean): void;
  /**
   * Sets the events that invoke the feedback form.
   * Default is set by `Instabug.start`.
   * @param {invocationEvent} invocationEvents Array of events that invokes the
   * feedback form.
   */
  function setInvocationEvents(invocationEvents: invocationEvent[]): void;

  /**
   * Sets the invocation options.
   * Default is set by `Instabug.start`.
   * @param {options} options Array of options
   */
  function setOptions(options: option[]): void;
  /**
   * Sets a block of code to be executed just before the SDK's UI is presented.
   * This block is executed on the UI thread. Could be used for performing any
   * UI changes before the SDK's UI is shown.
   * @param {function} handler - A callback that gets executed before invoking the SDK
   */
  function onInvokeHandler(handler: () => void): void;
  /**
   * Sets a block of code to be executed right after the SDK's UI is dismissed.
   * This block is executed on the UI thread. Could be used for performing any
   * UI changes after the SDK's UI is dismissed.
   * @param {function} handler - A callback to get executed after
   * dismissing the SDK.
   */
  function onSDKDismissedHandler(
    handler: (dismiss: dismissType, report: reportType) => void
  ): void;
  /**
   * Sets a block of code to be executed when a prompt option is selected.
   * @param {function} didSelectPromptOptionHandler - A block of code that
   *                  gets executed when a prompt option is selected.
   */
  function setDidSelectPromptOptionHandler(
    didSelectPromptOptionHandler: () => void
  ): void;
  /**
   * Sets the default edge and offset from the top at which the floating button
   * will be shown. Different orientations are already handled.
   * Default for `floatingButtonEdge` is `rectEdge.maxX`.
   * Default for `floatingButtonOffsetFromTop` is 50
   * @param {rectEdge} floatingButtonEdge `maxX` to show on the right,
   * or `minX` to show on the left.
   * @param {number} offsetFromTop floatingButtonOffsetFromTop Top offset for
   * floating button.
   */
  function setFloatingButtonEdge(
    floatingButtonEdge: number,
    offsetFromTop: number
  ): void;
  /**
   * Sets whether attachments in bug reporting and in-app messaging are enabled or not.
   * @param {boolean} screenshot A boolean to enable or disable screenshot attachments.
   * @param {boolean} extraScreenshot A boolean to enable or disable extra
   * screenshot attachments.
   * @param {boolean} galleryImage A boolean to enable or disable gallery image
   * attachments. In iOS 10+,NSPhotoLibraryUsageDescription should be set in
   * info.plist to enable gallery image attachments.
   * @param {boolean} screenRecording A boolean to enable or disable screen recording attachments.
   */
  function setEnabledAttachmentTypes(
    screenshot: boolean,
    extraScreenshot: boolean,
    galleryImage: boolean,
    screenRecording: boolean
  ): void;
  /**
   * Sets the threshold value of the shake gesture for iPhone/iPod Touch
   * Default for iPhone is 2.5.
   * @param {number} iPhoneShakingThreshold Threshold for iPhone.
   */
  function setShakingThresholdForiPhone(iPhoneShakingThreshold: number): void;
  /**
   * Sets the threshold value of the shake gesture for iPad.
   * Default for iPad is 0.6.
   * @param {number} iPadShakingThreshold Threshold for iPad.
   */
  function setShakingThresholdForiPad(iPadShakingThreshold: number): void;
  /**
   * Sets the threshold value of the shake gesture for android devices.
   * Default for android is an integer value equals 350.
   * you could increase the shaking difficulty level by
   * increasing the `350` value and vice versa
   * @param {number} androidThreshold Threshold for android devices.
   */
  function setShakingThresholdForAndroid(androidThreshold: number): void;
  /**
   * Sets whether the extended bug report mode should be disabled, enabled with
   * required fields or enabled with optional fields.
   * @param {extendedBugReportMode} extendedBugReportMode An enum to disable
   *                                the extended bug report mode, enable it
   *                                with required or with optional fields.
   */
  function setExtendedBugReportMode(
    extendedBugReportMode: extendedBugReportMode
  ): void;
  /**
   * Sets what type of reports, bug or feedback, should be invoked.
   * @param {array} types - Array of reportTypes
   */
  function setReportTypes(types: reportType[]): void;

  /**
   * Invoke bug reporting with report type and options.
   * @param {reportType} type 
   * @param {option} options 
   */
  function show(type: reportType, options: option[]): void;
  /**
   * Enable/Disable screen recording
   * @param {boolean} autoScreenRecordingEnabled boolean for enable/disable
   * screen recording on crash feature
  */
  function setAutoScreenRecordingEnabled(autoScreenRecordingEnabled: boolean): void;
  /**
   * Sets auto screen recording maximum duration
   *
   * @param autoScreenRecordingMaxDuration maximum duration of the screen recording video
   *                                       in seconds
   * The maximum duration is 30 seconds
   */
  function setAutoScreenRecordingDurationIOS(
    autoScreenRecordingMaxDuration: number
  ): void;
  /**
   * @summary Enables/disables inspect view hierarchy when reporting a bug/feedback.
   * @param {boolean} viewHierarchyEnabled A boolean to set whether view hierarchy are enabled
   * or disabled.
   */
  function setViewHierarchyEnabled(viewHierarchyEnabled: boolean): void;
  /**
   * Sets the default position at which the Instabug screen recording button will be shown.
   * Different orientations are already handled.
   * (Default for `position` is `bottomRight`)
   *
   * @param position is of type position `topLeft` to show on the top left of screen,
   * or `bottomRight` to show on the bottom right of scrren.
   */
  function setVideoRecordingFloatingButtonPosition(
    position: BugReporting.position
  ): void;
  /**
   * The event used to invoke the feedback form
   * @readonly
   * @enum {number}
   */
  enum invocationEvent {
    none,
    shake,
    screenshot,
    twoFingersSwipe,
    floatingButton
  }

  /**
   *  The extended bug report mode
   * @readonly
   * @enum {number}
   */
  enum extendedBugReportMode {
    enabledWithRequiredFields,
    enabledWithOptionalFields,
    disabled
  }
  /**
   * Type of the report either feedback or bug.
   * @readonly
   * @enum {number}
   */
  enum reportType {
    bug,
    feedback,
    question
  }
  /**
   * Options added while invoking bug reporting.
   * @readonly
   * @enum {number}
   */
  enum option {
    emailFieldHidden,
    emailFieldOptional,
    commentFieldRequired,
    disablePostSendingDialog
  }
  /**
   * Instabug floating buttons positions.
   * @readonly
   * @enum {number}
   */
  enum position {
    bottomRight,
    topRight,
    bottomLeft,
    topLeft
  }
}

export namespace CrashReporting {
  /**
   * Enables and disables everything related to crash reporting including intercepting
   * errors in the global error handler. It is enabled by default.
   * @param {boolean} isEnabled
   */
  function setEnabled(isEnabled: boolean): void;
  /**
   * Send handled JS error object
   *
   * @param errorObject Error object to be sent to Instabug's servers
   */
  function reportJSException(errorObject: object): void;
}
export namespace FeatureRequests {
  /**
    * Sets whether users are required to enter an email address or not when
    * sending reports.
    * Defaults to YES.
    * @param {boolean} isEmailFieldRequired A boolean to indicate whether email
    * field is required or not.
    * @param {actionTypes} actionTypes An enum that indicates which action
    *                                  types will have the isEmailFieldRequired
    */
  function setEmailFieldRequired(
    isEmailFieldRequired: boolean,
    actionTypes: actionTypes[]
  ): void;
  /**
   * Enables and disables everything related to feature requests.
   * @param {boolean} isEnabled 
   */
  function setEnabled(isEnabled: boolean): void;
  /**
    * Shows the UI for feature requests list
    *
    */
  function show(): void;
  /**
   * Instabug action types.
   * @readonly
   * @enum {number}
   */
  enum actionTypes {
    requestNewFeature,
    addCommentToFeature
  }
}
export namespace Replies {
  /**
   * Enables and disables everything related to receiving replies.
   * @param {boolean} isEnabled
   */
  function setEnabled(isEnabled: boolean): void;
  /**
   * Tells whether the user has chats already or not.
   * @param {function} callback - callback that is invoked if chats exist
   */
  function hasChats(callback: (previousChats: boolean) => void): void;
  /**
   * Manual invocation for replies.
   */
  function show(): void;

  /**
   * Sets a block of code that gets executed when a new message is received.
   * @param {function} onNewReplyReceivedHandler - A callback that gets
   * executed when a new message is received.
   */
  function setOnNewReplyReceivedHandler(
    onNewReplyReceivedHandler: () => void
  ): void;
  /**
   * Returns the number of unread messages the user currently has.
   * Use this method to get the number of unread messages the user
   * has, then possibly notify them about it with your own UI.
   * @param {messageCountCallback} messageCountCallback callback with argument
   * Notifications count, or -1 in case the SDK has not been initialized.
   */
  function getUnreadRepliesCount(
    messageCountCallback: (count: number) => void
  ): void;
  /**
   * Enables/disables showing in-app notifications when the user receives a
   * new message.
   * @param {boolean} inAppNotificationsEnabled A boolean to set whether
   * notifications are enabled or disabled.
   */
  function setInAppNotificationsEnabled(
    inAppNotificationsEnabled: boolean
  ): void;
  /**
   * Enables/disables the use of push notifications in the SDK.
   * Defaults to YES.
   * @param {boolean} isPushNotificationEnabled A boolean to indicate whether push
   * notifications are enabled or disabled.
   */
  function setPushNotificationsEnabled(
    isPushNotificationEnabled: boolean
  ): void;
  /**
   * Set whether new in app notification received will play a small sound notification
   * or not (Default is {@code false})
   * @android
   *
   * @param shouldPlaySound desired state of conversation sounds
   */
  function setInAppNotificationSound(shouldPlaySound: boolean): void;
  /**
   * Set the GCM registration token to Instabug
   *
   * @param token the GCM registration token
   */
  function setPushNotificationRegistrationTokenAndroid(token: string): void;
  /**
   * Show in-app Messaging's notifications
   *
   * @param data the data bundle related to Instabug
   */
  function showNotificationAndroid(data: object): void;
  /**
   * Set the push notification's icon that will be shown with Instabug notifications
   *
   * @param notificationIcon the notification icon resource ID
   */
  function setNotificationIconAndroid(notificationIcon: number): void;
  /**
   * Set a notification channel id to a notification channel that notifications
   * can be posted to.
   *
   * @param pushNotificationChannelId an id to a notification channel that notifications
   */
  function setPushNotificationChannelIdAndroid(pushNotificationChannelId: string): void;
  /**
   * Set whether new system notification received will play the default sound from
   * RingtoneManager or not (Default is {@code false})
   *
   * @param shouldPlaySound desired state of conversation sounds
   */
  function setSystemReplyNotificationSoundEnabledAndroid(shouldPlaySound: boolean): void;
}
export namespace Surveys {
  /**
   * @summary Sets whether surveys are enabled or not.
   * If you disable surveys on the SDK but still have active surveys on your Instabug dashboard,
   * those surveys are still going to be sent to the device, but are not going to be
   * shown automatically.
   * To manually display any available surveys, call `Instabug.showSurveyIfAvailable()`.
   * Defaults to `true`.
   * @param {boolean} isEnabled A boolean to set whether Instabug Surveys is enabled or disabled.
   */
  function setEnabled(isEnabled: boolean): void;
  /**
   * @summary Shows one of the surveys that were not shown before, that also have conditions
   * that match the current device/user.
   * Does nothing if there are no available surveys or if a survey has already been shown
   * in the current session.
   */
  function showSurveyIfAvailable(): void;

  /**
   * Returns an array containing the available surveys.
   * @param {availableSurveysCallback} availableSurveysCallback callback with
   * argument available surveys
   *
   */
  function getAvailableSurveys(
    availableSurveysCallback: (surveys: Survey[]) => void
  ): void;
  /**
   * Sets whether auto surveys showing are enabled or not.
   * @param autoShowingSurveysEnabled A boolean to indicate whether the
   *                                surveys auto showing are enabled or not.
   *
   */
  function setAutoShowingEnabled(autoShowingSurveysEnabled: boolean): void;

  /**
   * @summary Sets a block of code to be executed just before the survey's UI is presented.
   * This block is executed on the UI thread. Could be used for performing any UI changes before
   * the survey's UI is shown.
   * @param {function} onShowHandler - A block of code that gets executed before
   * presenting the survey's UI.
   */
  function setOnShowHandler(onShowHandler: () => void): void;

  /**
   * @summary Sets a block of code to be executed right after the survey's UI is dismissed.
   * This block is executed on the UI thread. Could be used for performing any UI
   * changes after the survey's UI is dismissed.
   * @param {function} onDismissHandler - A block of code that gets executed after
   * the survey's UI is dismissed.
   */
  function setOnDismissHandler(onDismissHandler: () => void): void;
  /**
   * Shows survey with a specific token.
   * Does nothing if there are no available surveys with that specific token.
   * Answered and cancelled surveys won't show up again.
   * @param {string} surveyToken - A String with a survey token.
   *
   */
  function showSurvey(surveyToken: string): void;
  /**
   * Returns true if the survey with a specific token was answered before.
   * Will return false if the token does not exist or if the survey was not answered before.
   * @param {string} surveyToken - A String with a survey token.
   * @param {function} surveyTokenCallback callback with argument as the desired value of the whether
   * the survey has been responded to or not.
   *
   */
  function hasRespondedToSurvey(
    surveyToken: string,
    surveyTokenCallback: (hasResponded: boolean) => void
  ): void;
  /**
   * Setting an option for all the surveys to show a welcome screen before
   * the user starts taking the survey.
   * @param shouldShowWelcomeScreen A boolean for setting whether the
   *                                welcome screen should show.
   *
   */
  function setShouldShowWelcomeScreen(shouldShowWelcomeScreen: boolean): void;
  /**
   * iOS Only
   * @summary Sets url for the published iOS app on AppStore, You can redirect
   * NPS Surveys or AppRating Surveys to AppStore to let users rate your app on AppStore itself.
   * @param {String} appStoreURL A String url for the published iOS app on AppStore
   */
  function setAppStoreURL(appStoreURL: string): void;
}
export namespace NetworkLogger {
  /**
   * Sets whether network logs should be sent with bug reports.
   * It is enabled by default.
   * @param {boolean} isEnabled
   */
  function setEnabled(isEnabled: boolean): void;
  /**
   * Obfuscates any response data.
   * @param {function} handler
   */
  function setNetworkDataObfuscationHandler(handler: (networkData: any) => any): void;
  /**
   * Omit requests from being logged based on either their request or response details
   * @param {string} expression
   */
  function setRequestFilterExpression(expression: string): void;
  /**
   * Returns progress in terms of totalBytesSent and totalBytesExpectedToSend a network request.
   * @param {function} handler
   */
  function setProgressHandlerForRequest(handler: () => void): void;
  /**
   * Apollo Link Request Handler to track network log for graphQL using apollo
   * @param {any} operation 
   * @param {any} forward 
   */
  function apolloLinkRequestHandler(operation: any, forward: any):any;
}
export class Trace {
  constructor(id: string, name?: string, attributes?: object);
  /**
   * Add an attribute with key and value to the Trace to be sent.
   * @param {string} key 
   * @param {string} value 
   */
  setAttribute(key: string, value: string): void;
  /**
    * End Execution Trace
    */
  end(): void;
}
export namespace APM {
  /**
   * Enables or disables APM
   * @param {boolean} isEnabled 
   */
  function setEnabled(isEnabled: boolean): void;
  /**
   * Enables or disables APM App Launch
   * @param {boolean} isEnabled 
   */
  function setAppLaunchEnabled(isEnabled: boolean): void;
  /**
   * Ends the current session’s App Launch. Calling this API is optional, App Launches will still be captured and ended automatically by the SDK;
   * this API just allows you to change when an App Launch actually ends.
   */
  function endAppLaunch(): void;
  /**
   * Enables or disables APM Network Metric
   * @param {boolean} isEnabled 
   */
  function setNetworkEnabledIOS(isEnabled: boolean): void;
  /**
   * Enables or disables APM UI Responsivenes tracking feature
   * @param {boolean} isEnabled 
   */
  function setAutoUITraceEnabled(isEnabled: boolean): void;
  /**
   * Starts a custom trace
   * Returns a promise, the promise delivers the trace reference if APM is enabled, otherwise it gets rejected
   * @param {string} name 
   */
  function startExecutionTrace(name: string): Promise<Trace>;
  /**
   * Starts a custom trace
   * @param {string} name 
   */
  function startUITrace(name: string): void;
  /**
   * Starts a custom trace
   * @param {string} name 
   */
  function endUITrace(): void;
  /**
   * Sets the printed logs priority. Filter to one of the following levels:
   *
   * - logLevelNone disables all APM SDK console logs.
   *
   * - logLevelError prints errors only, we use this level to let you know if something goes wrong.
   *
   * - logLevelWarning displays warnings that will not necessarily lead to errors but should be addressed nonetheless.
   *
   * - logLevelInfo (default) logs information that we think is useful without being too verbose.
   *
   * - logLevelDebug use this in case you are debugging an issue. Not recommended for production use.
   *
   * - logLevelVerbose use this only if logLevelDebug was not enough and you need more visibility
   * on what is going on under the hood.
   *
   * Similar to the logLevelDebug level, this is not meant to be used on production environments.
   *
   * Each log level will also include logs from all the levels above it. For instance,
   * logLevelInfo will include logLevelInfo logs as well as logLevelWarning
   * and logLevelError logs.

    * @param {logLevel} logLevel the printed logs priority.
    */
  function setLogLevel(logLevel: logLevel): void;
  /**
   * APM Log Level.
   * @readonly
   * @enum {number}
   */
  enum logLevel {
    none,
    error,
    warning,
    info,
    debug,
    verbose,
  }
}

/**
 * Starts the SDK.
 * This is the main SDK method that does all the magic. This is the only
 * method that SHOULD be called.
 * Should be called in constructor of the AppRegistry component
 * @param {string} token The token that identifies the app, you can find
 * it on your dashboard.
 * @param {invocationEvent} invocationEvent The event that invokes
 * the SDK's UI.
 */
export function start(token: string, invocationEvent: invocationEvent[]): void;
/**
 * Attaches user data to each report being sent.
 * Each call to this method overrides the user data to be attached.
 * Maximum size of the string is 1,000 characters.
 * @param {string} userData A string to be attached to each report, with a
 * maximum size of 1,000 characters.
 */
export function setUserData(userData: string): void;

/**
 * Sets whether the SDK is tracking user steps or not.
 * Enabling user steps would give you an insight on the scenario a user has
 * performed before encountering a bug or a crash. User steps are attached
 * with each report being sent.
 * @param {boolean} isEnabled A boolean to set user steps tracking
 * to being enabled or disabled.
 */
export function setTrackUserSteps(isEnabled: boolean): void;
/**
 * Sets whether IBGLog should also print to Xcode's console log or not.
 * @param {boolean} printsToConsole A boolean to set whether printing to
 *                  Xcode's console is enabled or not.
 */
export function setIBGLogPrintsToConsole(printsToConsole: boolean): void;

/**
 * The session profiler is enabled by default and it attaches to the bug and
 * crash reports the following information during the last 60 seconds before the report is sent.
 * @param {boolean} sessionProfilerEnabled - A boolean parameter to enable or disable the feature.
 *
 */
export function setSessionProfilerEnabled(
  sessionProfilerEnabled: boolean
): void;
/**
 * This API sets the verbosity level of logs used to debug The SDK. The defualt value in debug 
 * mode is sdkDebugLogsLevelVerbose and in production is sdkDebugLogsLevelError.
 * @param {sdkDebugLogsLevel} sdkDebugLogsLevel - The verbosity level of logs.
 *
 */
export function setSdkDebugLogsLevel(
  sdkDebugLogsLevel: sdkDebugLogsLevel
): void;

/**
 * Sets the SDK's locale.
 * Use to change the SDK's UI to different language.
 * Defaults to the device's current locale.
 * @param {locale} locale A locale to set the SDK to.
 */
export function setLocale(locale: locale): void;
/**
 * Sets the color theme of the SDK's whole UI.
 * the SDK's UI to.
 * @param colorTheme
 */
export function setColorTheme(colorTheme: colorTheme): void;
/**
 * Sets the primary color of the SDK's UI.
 * Sets the color of UI elements indicating interactivity or call to action.
 * To use, import processColor and pass to it with argument the color hex
 * as argument.
 * @param {color} color A color to set the UI elements of the SDK to.
 */
export function setPrimaryColor(color: string): void;
/**
 * Appends a set of tags to previously added tags of reported feedback,
 * bug or crash.
 * @param {string[]} tags An array of tags to append to current tags.
 */
export function appendTags(tags: string[]): void;
/**
 * Manually removes all tags of reported feedback, bug or crash.
 */
export function resetTags(): void;
/**
 * Gets all tags of reported feedback, bug or crash.
 * @param {tagsCallback} tagsCallback callback with argument tags of reported feedback, bug or crash.
 */
export function getTags(tagsCallback: () => void): void;

/**
 * Overrides any of the strings shown in the SDK with custom ones.
 * Allows you to customize any of the strings shown to users in the SDK.
 * @param {string} string String value to override the default one.
 * @param {strings} key Key of string to override.
 */
export function setString(key: strings, string: string): void;

/**
 * Sets the default value of the user's email and hides the email field from the reporting UI
 * and set the user's name to be included with all reports.
 * It also reset the chats on device to that email and removes user attributes,
 * user data and completed surveys.
 * @param {string} email Email address to be set as the user's email.
 * @param {string} name Name of the user to be set.
 */
export function identifyUser(email: string, name: string): void;
/**
 * Sets the default value of the user's email to nil and show email field and remove user name
 * from all reports
 * It also reset the chats on device and removes user attributes, user data and completed surveys.
 */
export function logOut(): void;

/**
 * Logs a user event that happens through the lifecycle of the application.
 * Logged user events are going to be sent with each report, as well as at the end of a session.
 * @param {string} name Event name.
 */
export function logUserEvent(name: string): void;
/**
 * Appends a log message to Instabug internal log
 * <p>
 * These logs are then sent along the next uploaded report.
 * All log messages are timestamped <br/>
 * Logs aren't cleared per single application run.
 * If you wish to reset the logs,
 * use {@link #clearLogs()} ()}
 * </p>
 * Note: logs passed to this method are <b>NOT</b> printed to Logcat
 *
 * @param message    the message
 */
export function logVerbose(message: string): void;
/**
 * Appends a log message to Instabug internal log
 * <p>
 * These logs are then sent along the next uploaded report.
 * All log messages are timestamped <br/>
 * Logs aren't cleared per single application run.
 * If you wish to reset the logs,
 * use {@link #clearLogs()} ()}
 * </p>
 * Note: logs passed to this method are <b>NOT</b> printed to Logcat
 *
 * @param message    the message
 */
export function logInfo(message: string): void;
/**
 * Appends a log message to Instabug internal log
 * <p>
 * These logs are then sent along the next uploaded report.
 * All log messages are timestamped <br/>
 * Logs aren't cleared per single application run.
 * If you wish to reset the logs,
 * use {@link #clearLogs()} ()}
 * </p>
 * Note: logs passed to this method are <b>NOT</b> printed to Logcat
 *
 * @param message    the message
 */
export function logDebug(message: string): void;
/**
 * Appends a log message to Instabug internal log
 * <p>
 * These logs are then sent along the next uploaded report.
 * All log messages are timestamped <br/>
 * Logs aren't cleared per single application run.
 * If you wish to reset the logs,
 * use {@link #clearLogs()} ()}
 * </p>
 * Note: logs passed to this method are <b>NOT</b> printed to Logcat
 *
 * @param message    the message
 */
export function logError(message: string): void;
/**
 * Appends a log message to Instabug internal log
 * <p>
 * These logs are then sent along the next uploaded report.
 * All log messages are timestamped <br/>
 * Logs aren't cleared per single application run.
 * If you wish to reset the logs,
 * use {@link #clearLogs()} ()}
 * </p>
 * Note: logs passed to this method are <b>NOT</b> printed to Logcat
 *
 * @param message    the message
 */
export function logWarn(message: string): void;
/**
 * Clear all Instabug logs, console logs, network logs and user steps.
 */
export function clearLogs(): void;
/**
 * Sets whether user steps tracking is visual, non visual or disabled.
 * User Steps tracking is enabled by default if it's available
 * in your current plan.
 *
 * @param {reproStepsMode} reproStepsMode An enum to set user steps tracking
 * to be enabled, non visual or disabled.
 */
export function setReproStepsMode(reproStepsMode: reproStepsMode): void;
/**
 * Sets user attribute to overwrite it's value or create a new one if it doesn't exist.
 *
 * @param key   the attribute
 * @param value the value
 */
export function setUserAttribute(key: string, value: string): void;
/**
 * Returns the user attribute associated with a given key.
 aKey
  * @param {string} key The attribute key as string
  * @param {function} userAttributeCallback callback with argument as the desired user attribute value
  */
export function getUserAttribute(
  key: string,
  userAttributeCallback: () => void
): void;
/**
 * Removes user attribute if exists.
 *
 * @param key the attribute key as string
 * @see #setUserAttribute(String, String)
 */
export function removeUserAttribute(key: string): void;
/**
 * @summary Returns all user attributes.
 * @param {function} userAttributesCallback callback with argument A new dictionary containing
 * all the currently set user attributes, or an empty dictionary if no user attributes have been set.
 */
export function getAllUserAttributes(userAttributesCallback: () => void): void;
/**
 * Clears all user attributes if exists.
 */
export function clearAllUserAttributes(): void;

/**
 * Enable/Disable debug logs from Instabug SDK
 * Default state: disabled
 *
 * @param isDebugEnabled whether debug logs should be printed or not into LogCat
 */
export function setDebugEnabled(isDebugEnabled: boolean): void;
/**
 * Enables all Instabug functionality
 * It works on android only
 */
export function enable(): void;
/**
 * Disables all Instabug functionality
 * It works on android only
 */
export function disable(): void;

/**
 * @summary Checks whether app is development/Beta testing OR live
 * Note: This API is iOS only
 * It returns in the callback false if in development or beta testing on Test Flight, and
 * true if app is live on the app store.
 * @param {function} runningLiveCallBack callback with argument as return value 'isLive'
 */
export function isRunningLive(runningLiveCallBack: (isLive: boolean) => void): void;

/**
 * Shows the welcome message in a specific mode.
 * @param welcomeMessageMode An enum to set the welcome message mode to
 *                           live, or beta.
 *
 */
export function showWelcomeMessage(
  welcomeMessageMode: welcomeMessageMode
): void;
/**
 * Sets the welcome message mode to live, beta or disabled.
 * @param welcomeMessageMode An enum to set the welcome message mode to
 *                           live, beta or disabled.
 *
 */
export function setWelcomeMessageMode(
  welcomeMessageMode: welcomeMessageMode
): void;
/**
 * Add file to be attached to the bug report.
 * @param {string} filePath
 * @param {string} fileName
 */
export function addFileAttachment(filePath: string, fileName: string): void;

/**
 * @deprecated Use {@link Instabug.addPrivateView} instead. 
 * 
 * Hides component from screenshots, screen recordings and view hierarchy.
 * @param {Object} viewRef the ref of the component to hide
 */
export function setPrivateView(viewRef: object): void;

/**
 * Hides component from screenshots, screen recordings and view hierarchy.
 * @param {Object} viewRef the ref of the component to hide
 */
export function addPrivateView(viewRef: object): void;

/**
 * Removes component from the set of hidden views. The component will show again in 
 * screenshots, screen recordings and view hierarchy.
 * @param {Object} viewRef the ref of the component to remove from hidden views
 */
export function removePrivateView(viewRef: object): void;

/**
 * Shows default Instabug prompt.
 */
export function show(): void;
export function onReportSubmitHandler(
  preSendingHandler: (presendingHandler: Report) => void
): void;
export function callPrivateApi(apiName: string, param: any): void;
export function onNavigationStateChange(
  prevState: any,
  currentState: any,
  action: any
): void;
export function onStateChange(
  state: any
): void;
export function reportScreenChange(
  screenName: string
): void;

/**
   * Add experiments to next report.
   * @param {string[]} experiments An array of experiments to add to the next report.
   */
export function addExperiments(experiments:string[]): void;

/**
 * Remove experiments from next report.
 * @param {string[]} experiments An array of experiments to remove from the next report.
 */
export function removeExperiments(experiments: string[]): void;

/**
 * Clear all experiments
 */
export function clearAllExperiments(): void;

export function componentDidAppearListener(componentObj:
  { componentId: any, componentName: any, passProps: any }
): void;
/**
 * The event used to invoke the feedback form
 * @readonly
 * @enum {number}
 */
export enum invocationEvent {
  none,
  shake,
  screenshot,
  twoFingersSwipe,
  floatingButton
}
/**
 * The user steps option.
 * @readonly
 * @enum {number}
 */
export enum reproStepsMode {
  enabled,
  disabled,
  enabledWithNoScreenshots
}
/**
 * Type of SDK dismiss
 * @readonly
 * @enum {number}
 */
export enum dismissType {
  submit,
  cancel,
  addAttachment
}

/**
 * Verbosity level of the SDK debug logs. This has nothing to do with IBGLog,
 * and only affect the logs used to debug the SDK itself.
 * @readonly
 * @enum {number}
 */
export enum sdkDebugLogsLevel {
  sdkDebugLogsLevelVerbose,
  sdkDebugLogsLevelDebug,
  sdkDebugLogsLevelError,
  sdkDebugLogsLevelNone,
}
/**
 *  The extended bug report mode
 * @readonly
 * @enum {number}
 */
export enum extendedBugReportMode {
  enabledWithRequiredFields,
  enabledWithOptionalFields,
  disabled
}
/**
 * The supported locales
 * @readonly
 * @enum {number}
 */
export enum locale {
  arabic,
  azerbaijani,
  chineseSimplified,
  chineseTraditional,
  czech,
  danish,
  dutch,
  english,
  french,
  german,
  italian,
  japanese,
  polish,
  portugueseBrazil,
  russian,
  spanish,
  swedish,
  turkish,
  korean
}
/**
 * The color theme of the different UI elements
 * @readonly
 * @enum {number}
 */
export enum colorTheme {
  light,
  dark
}
/**
 * Rectangle edges
 * @readonly
 * @enum {number}
 */
export enum floatingButtonEdge {
  left,
  right
}
/**
 * Instabug floating buttons positions.
 * @readonly
 * @enum {number}
 */
export enum IBGPosition {
  bottomRight,
  topRight,
  bottomLeft,
  topLeft
}
/**
 * The welcome message mode.
 * @readonly
 * @enum {number}
 */
export enum welcomeMessageMode {
  live,
  beta,
  disabled
}
/**
 * Instabug action types.
 * @readonly
 * @enum {number}
 */
export enum actionTypes {
  allActions,
  reportBug,
  requestNewFeature,
  addCommentToFeature
}
/**
 * Instabug strings
 * @readonly
 * @enum {number}
 */
export enum strings {
  shakeHint,
  swipeHint,
  edgeSwipeStartHint,
  startAlertText,
  invalidEmailMessage,
  invalidEmailTitle,
  invalidCommentMessage,
  invalidCommentTitle,
  invocationHeader,
  reportQuestion,
  reportBug,
  reportFeedback,
  emailFieldHint,
  commentFieldHintForBugReport,
  commentFieldHintForFeedback,
  commentFieldHintForQuestion,
  videoPressRecord,
  addVideoMessage,
  addVoiceMessage,
  addImageFromGallery,
  addExtraScreenshot,
  audioRecordingPermissionDeniedTitle,
  audioRecordingPermissionDeniedMessage,
  microphonePermissionAlertSettingsButtonText,
  recordingMessageToHoldText,
  recordingMessageToReleaseText,
  conversationsHeaderTitle,
  screenshotHeaderTitle,
  okButtonText,
  cancelButtonText,
  thankYouText,
  audio,
  video,
  image,
  team,
  messagesNotification,
  messagesNotificationAndOthers,
  conversationTextFieldHint,
  collectingDataText,
  thankYouAlertText,
  welcomeMessageBetaWelcomeStepTitle,
  welcomeMessageBetaWelcomeStepContent,
  welcomeMessageBetaHowToReportStepTitle,
  welcomeMessageBetaHowToReportStepContent,
  welcomeMessageBetaFinishStepTitle,
  welcomeMessageBetaFinishStepContent,
  welcomeMessageLiveWelcomeStepTitle,
  welcomeMessageLiveWelcomeStepContent,
  surveysStoreRatingThanksTitle,
  surveysStoreRatingThanksSubtitle,
  reportBugDescription,
  reportFeedbackDescription,
  reportQuestionDescription,
  requestFeatureDescription,
  discardAlertTitle,
  discardAlertMessage,
  discardAlertCancel,
  discardAlertAction,
  addAttachmentButtonTitleStringName,
  reportReproStepsDisclaimerBody,
  reportReproStepsDisclaimerLink,
  reproStepsProgressDialogBody,
  reproStepsListHeader,
  reproStepsListDescription,
  reproStepsListEmptyStateDescription,
  reproStepsListItemTitle
}

interface Report {
  /**
   * Attach debug log to the report to be sent.
   * @param {string} log 
   */
  logDebug(log: string): void;
  /**
   * Attach verbose log to the report to be sent.
   * @param {string} log 
   */
  logVerbose(log: string): void;
  /**
   * Attach warn log to the report to be sent.
   * @param {string} log 
   */
  logWarn(log: string): void;
  /**
   * Attach error log to the report to be sent.
   * @param {string} log 
   */
  logError(log: string): void;
  /**
   * Attach info log to the report to be sent.
   * @param {string} log 
   */
  logInfo(log: string): void;
  /**
   * Append a tag to the report to be sent.
   * @param {string} tag 
   */
  appendTag(tag: string): void;
  /**
   * Append a console log to the report to be sent.
   * @param {string} consoleLog 
   */
  appendConsoleLog(consoleLog: string): void;
  /**
   * Add a user attribute with key and value to the report to be sent.
   * @param {string} key 
   * @param {string} value 
   */
  setUserAttribute(key: string, value: string): void;
  /**
   * Attach a file to the report to be sent.
   * @param {string} url 
   * @param {string} fileName 
   */
  addFileAttachmentWithUrl(url: string, filename: string): void;
  /**
   * Attach a file to the report to be sent.
   * @param {string} data 
   * @param {string} fileName 
   */
  addFileAttachmentWithData(data: string, filename: string): void;
}

interface Survey {
  title: string;
}