/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/*
    Hello there! This is a demonstration of how to override a file from the base template.

    It's necessary that the module export interface remain consistent,
    as other files in the base template rely on constants.js, thus we
    import the underlying constants.js, modifies it and re-export it.
*/

/** Display name for this storefront (OAuth, legal pages, marketing copy, and home hero). */
export const STORE_DISPLAY_NAME = 'Philip B2C DX Text'

/** Home hero headline (matches storefront branding). */
export const CUSTOM_HOME_TITLE = STORE_DISPLAY_NAME

export * from '@salesforce/retail-react-app/app/constants'
