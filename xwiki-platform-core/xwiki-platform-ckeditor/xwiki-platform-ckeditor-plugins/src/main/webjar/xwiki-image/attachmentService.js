/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

define('attachmentService', [
  'jquery',
  'xwiki-solr-search',
], function ($, SolrSearch) {

  // Attachment cache
  var attachmentsByQuery = {};

  var clearCache = function () {
    attachmentsByQuery = {
      global: {},
      local: {}
    };
  };

  clearCache();

  var getAttachments = function (query, isGlobal, force, editor, sort) {
    var deferred = $.Deferred();

    var cached = attachmentsByQuery[(isGlobal ? "global" : "local")][query];

    if (cached && !force) {
      return deferred.resolve(cached).promise();
    }

    const solrSearch = new SolrSearch({
        limit: 100,
        target: XWiki.Model.serialize(editor.config.sourceDocument.documentReference),
        solrOptions: {
          sort: "attdate_sort " + sort
        }
    });

    solrSearch.search(query, isGlobal).then(function (data) {
      attachmentsByQuery[(isGlobal ? "global" : "local")][query] = data;
      deferred.resolve(data);
    });

    return deferred.promise();

  };

  return {
    getAttachments: getAttachments,
    clearCache: clearCache,
  };
});
