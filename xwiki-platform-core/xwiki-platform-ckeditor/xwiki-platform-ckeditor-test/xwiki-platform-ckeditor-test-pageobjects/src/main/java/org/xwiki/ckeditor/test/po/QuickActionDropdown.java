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
package org.xwiki.ckeditor.test.po;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.xwiki.stability.Unstable;
import org.xwiki.test.ui.po.BaseElement;


/**
 * Models a Quick Action drop-down.
 *
 * @version $Id$
 * @since 15.5RC1
 */
@Unstable
public class QuickActionDropdown extends BaseElement
{
    
    /**
     * The associated CKEditor instance.
     */
    private final CKEditor editor;
    
    /**
     * Creates a new Quick Action drop-down instance.
     * 
     * @param editor - CKEditor instance
     */
    public QuickActionDropdown(CKEditor editor)
    {
//        this.query = "/";
        this.editor = editor;
    }
    
    
    /**
     * Retrieve the list of Quick Actions.
     * 
     * @return the Quick Actions
     */
    public List<WebElement> getQuickActions()
    {
        return new ArrayList<>();
    }
    
}
