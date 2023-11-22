[#function isDesktopEnabled]
    [#if isSmartBundlingDesktopEnabledRac??]
        [#return isSmartBundlingDesktopEnabledRac /]
    [/#if]

    [#assign isSmartBundlingDesktopEnabledRac = false /]

    [#if smartBundlingRacConfiguration?? && smartBundlingRacConfiguration.isDesktopEnabledRac()]
        [#if smartBundlingRacConfiguration.isAbTestDesktopEnabledRac()]
            [#local variationId = smartBundlingRacConfiguration.getDesktopAbTestVariationIdRac() /]
            [#local variationAssignment = abTest.getAbTestVariationAssignment(smartBundlingRacConfiguration.getDesktopAbTestIdRac()) /]

            [#assign isSmartBundlingDesktopEnabledRac = variationAssignment == variationId  /]
        [#else]
            [#assign isSmartBundlingDesktopEnabledRac = true /]
        [/#if]
    [/#if]
    [#return isSmartBundlingDesktopEnabledRac /]
[/#function]